---
name: weightloss-analyzer
description: "\u51cf\u80a5\u5206\u6790\u6280\u80fd workflow skill. Use this skill when the user needs \u5206\u6790\u51cf\u80a5\u6570\u636e\u3001\u8ba1\u7b97\u4ee3\u8c22\u7387\u3001\u8ffd\u8e2a\u80fd\u91cf\u7f3a\u53e3\u3001\u7ba1\u7406\u51cf\u80a5\u9636\u6bb5 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["weightloss-analyzer", "data-ai"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# 减肥分析技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/weightloss-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# 减肥分析技能 分析减肥数据，计算代谢率，追踪能量缺口，管理减肥阶段。

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 功能, 数据源, 输出格式, 基本信息, 身体指标, 建议.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 需要分析减重数据、代谢率、能量缺口或减脂阶段管理时使用。
- 任务涉及 BMI、体脂、围度、BMR/TDEE 或体重变化趋势分析。
- 用户请求减肥进度评估、目标规划或个性化减重建议时使用。
- Use when the request clearly matches the imported source intent: 分析减肥数据、计算代谢率、追踪能量缺口、管理减肥阶段.
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

#### Imported: 功能

### 1. 身体成分分析

**BMI计算与分类**
- BMI = 体重(kg) / 身高(m)²
- 分类标准（WHO亚洲标准）：
  - 偏瘦：BMI < 18.5
  - 正常：18.5 ≤ BMI < 24
  - 超重：24 ≤ BMI < 28
  - 肥胖：BMI ≥ 28

**体脂率评估**
- 男性：15-20%（正常），20-25%（偏高），>25%（肥胖）
- 女性：20-25%（正常），25-30%（偏高），>30%（肥胖）

**围度分析**
- 腰围评估
  - 男性：< 90cm（正常），≥ 90cm（腹部肥胖）
  - 女性：< 85cm（正常），≥ 85cm（腹部肥胖）
- 腰臀比
  - 男性：< 0.9（正常），≥ 0.9（腹部肥胖）
  - 女性：< 0.85（正常），≥ 0.85（腹部肥胖）

**理想体重计算**
- BMI法：理想体重 = 身高(m)² × 22
- Broca法修正：理想体重 = (身高cm - 100) × 0.9

### 2. 代谢率计算

**Harris-Benedict公式（1919原始版）**
- 男性：BMR = 88.362 + (13.397 × 体重kg) + (4.799 × 身高cm) - (5.677 × 年龄)
- 女性：BMR = 447.593 + (9.247 × 体重kg) + (3.098 × 身高cm) - (4.330 × 年龄)

**Mifflin-St Jeor公式（推荐，更准确）**
- 男性：BMR = (10 × 体重kg) + (6.25 × 身高cm) - (5 × 年龄) + 5
- 女性：BMR = (10 × 体重kg) + (6.25 × 身高cm) - (5 × 年龄) - 161

**Katch-McArdle公式（基于瘦体重）**
- BMR = 370 + (21.6 × 瘦体重kg)
- 瘦体重 = 体重kg × (1 - 体脂率)

**TDEE计算**
- TDEE = BMR × 活动系数
- 活动系数：
  - 久坐：1.2
  - 轻度活动：1.375
  - 中度活动：1.55
  - 高度活动：1.725
  - 非常高度活动：1.9

### 3. 能量缺口管理

**每日能量缺口追踪**
- 缺口 = TDEE - 实际摄入 + 运动消耗
- 缺口达标分析：实际缺口 vs 目标缺口

**减重估算**
- 1kg脂肪 ≈ 7700大卡
- 预计周减重 = 每日缺口 × 7 / 7700
- 安全减重速度：0.5-1kg/周（缺口500-1000大卡/天）

**热量安全边界**
- 男性最低热量：1500大卡/天
- 女性最低热量：1200大卡/天
- 绝对最低：BMR × 1.2

### 4. 阶段管理

**减重期**
- 追踪体重变化
- 计算减重进度
- 监测减重速度

**平台期检测**
- 定义：2周以上体重无明显变化（波动<0.5kg）
- 原因分析：代谢适应、水分滞留、肌肉增加
- 突破方法：调整热量、改变运动、间歇性断食

**维持期**
- 目标体重±2kg范围内
- 定期监测体重
- 及时调整方案

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @weightloss-analyzer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @weightloss-analyzer against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @weightloss-analyzer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @weightloss-analyzer using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/weightloss-analyzer`, fails to mention provenance, or does not use any copied source files at all.
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
- `@3d-web-experience-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 数据源

### 主要数据源

1. **健身追踪器**
   - 路径：`data/fitness-tracker.json`
   - 内容：体重记录、身体成分、代谢率、阶段管理

2. **营养追踪器**
   - 路径：`data/nutrition-tracker.json`
   - 内容：热量摄入、能量缺口、膳食计划

3. **健康日志**
   - 路径：`data/health-logs/YYYY-MM/YYYY-MM-DD.json`
   - 内容：每日体重、饮食记录

#### Imported: 输出格式

### 身体成分分析报告

```markdown
# 身体成分分析报告

#### Imported: 基本信息

- 性别：男
- 年龄：52岁
- 身高：175cm
- 体重：75kg

#### Imported: 身体指标

### BMI
- 当前BMI：24.5
- 分类：超重
- 理想体重：67kg（BMI=22）
- 需减重：8kg

### 体脂率
- 当前体脂率：25%
- 分类：偏高
- 目标体脂率：15-20%

### 围度分析
- 腰围：92cm（腹部肥胖风险）
- 臀围：98cm
- 腰臀比：0.94（腹部肥胖）

#### Imported: 建议

1. 每周减重0.5-1kg
2. 目标减重时间：8-16周
3. 综合干预：饮食+运动
```

### 代谢率分析报告

```markdown
# 代谢率分析报告

#### Imported: BMR计算

| 公式 | BMR | 说明 |
|------|-----|------|
| Harris-Benedict | 1650 | 1919原始公式 |
| Mifflin-St Jeor | 1620 | 推荐使用 ⭐ |
| Katch-McArdle | 1700 | 基于体脂率 |

**推荐BMR：1620 大卡/天**

#### Imported: TDEE计算

- 活动水平：中度运动
- 活动系数：1.55
- TDEE：1620 × 1.55 = **2511 大卡/天**

### 热量分配
- BMR基础代谢：65% ≈ 1632 大卡
- 运动消耗：20% ≈ 502 大卡
- NEAT日常活动：15% ≈ 377 大卡

#### Imported: 减肥热量目标

### 温和减重方案
- 每日缺口：500 大卡
- 目标摄入：2011 大卡/天
- 预计减重：0.5kg/周

### 积极减重方案
- 每日缺口：750 大卡
- 目标摄入：1761 大卡/天
- 预计减重：0.75kg/周

### 快速减重方案
- 每日缺口：1000 大卡
- 目标摄入：1511 大卡/天
- 预计减重：1kg/周
- ⚠️ 仅限短期使用

#### Imported: 安全检查

- 最低热量要求：1500 大卡/天（男性）
- 快速方案热量：1511 大卡/天 ✅
- 建议选择：温和或积极方案
```

### 能量缺口追踪报告

```markdown
# 能量缺口追踪报告

#### Imported: 本周汇总（2025-06-16 至 2025-06-22）

| 日期 | 摄入 | 运动消耗 | NEAT | 缺口 | 达标 |
|------|------|---------|------|------|------|
| 周一 | 1800 | 350 | 300 | 961 | ✅ |
| 周二 | 2100 | 200 | 250 | 461 | ❌ |
| 周三 | 1750 | 400 | 300 | 1061 | ✅ |
| 周四 | 1950 | 300 | 280 | 741 | ✅ |
| 周五 | 2200 | 150 | 200 | 261 | ❌ |
| 周六 | 2400 | 100 | 150 | -89 | ❌ |
| 周日 | 1850 | 350 | 300 | 911 | ✅ |

**目标缺口：500 大卡/天**

#### Imported: 统计分析

- 平均缺口：642 大卡/天
- 达标天数：5/7天（71%）
- 总缺口：4494 大卡
- 预计减重：0.58kg

#### Imported: 趋势分析

- 周末缺口偏小（社交活动增加）
- 建议提前规划周末饮食

#### Imported: 下周目标

- 达标天数：7/7天
- 平均缺口：700 大卡/天
- 预计减重：0.64kg
```

### 阶段管理报告

```markdown
# 减肥阶段管理报告

#### Imported: 当前阶段：减重期

### 进度追踪
- 开始日期：2025-01-01
- 初始体重：82kg
- 当前体重：75kg
- 目标体重：67kg
- 已减重：7kg
- 剩余：8kg
- 进度：47%

### 减重速度
- 总周数：24周
- 平均减重：0.29kg/周
- 最近4周：0.35kg/周 ⬆️ 加速中

#### Imported: 状态分析

### 当前状态：✅ 良好
- 减重速度在健康范围（0.5-1kg/周）
- 代谢率稳定
- 肌肉量维持良好

### 平台期监测
- 最近2周变化：-0.8kg
- 状态：❌ 非平台期

#### Imported: 下一步行动

1. 继续当前热量方案
2. 增加力量训练频率
3. 每周监测身体成分
```

#### Imported: 使用方法

通过 `/fitness:weightloss-*` 和 `/nutrition:weightloss-*` 命令调用。

### 示例命令

```bash
# 设置减肥计划
/fitness:weightloss-setup --weight 75 --height 175 --age 52 --gender male

# 计算代谢率
/fitness:weightloss-bmr --formula mifflin

# 追踪能量缺口
/nutrition:weightloss-track --intake 1800 --exercise 350

# 生成阶段报告
/fitness:weightloss-report

# 检测平台期
/fitness:weightloss-plateau-check
```

#### Imported: 安全原则

### 热量安全边界
- 不推荐 < 1200大卡/天（女性）
- 不推荐 < 1500大卡/天（男性）
- 绝对最低不低于 BMR × 1.2

### 减重速度控制
- 安全范围：0.5-1kg/周
- 最大不超过：1.5kg/周
- 长期平均：0.5-0.8kg/周

### 医学免责声明

本技能仅供健康参考，不构成医疗建议。

以下情况请咨询医生：
- BMI > 35
- 有心脏病、高血压、糖尿病等慢性病
- 服用处方药物
- 女性怀孕或哺乳期
- 任何健康状况不确定的情况

---

**技能版本**: v1.0
**最后更新**: 2026-01-14
**维护者**: WellAlly Tech

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

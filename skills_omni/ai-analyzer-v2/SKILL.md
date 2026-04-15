---
name: "ai-analyzer-v2"
description: "AI\\u5065\\u5eb7\\u5206\\u6790\\u5668 workflow skill. Use this skill when the user needs AI\\u9a71\\u52a8\\u7684\\u7efc\\u5408\\u5065\\u5eb7\\u5206\\u6790\\u7cfb\\u7edf\\uff0c\\u6574\\u5408\\u591a\\u7ef4\\u5ea6\\u5065\\u5eb7\\u6570\\u636e\\u3001\\u8bc6\\u522b\\u5f02\\u5e38\\u6a21\\u5f0f\\u3001\\u9884\\u6d4b\\u5065\\u5eb7\\u98ce\\u9669\\u3001\\u63d0\\u4f9b\\u4e2a\\u6027\\u5316\\u5efa\\u8bae\\u3002\\u652f\\u6301\\u667a\\u80fd\\u95ee\\u7b54\\u548cAI\\u5065\\u5eb7\\u62a5\\u544a\\u751f\\u6210\\u3002 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "ai-analyzer-v2"
  - "ai-analyzer"
  - "frontend"
  - "omni-enhanced"
complexity: "intermediate"
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
date_updated: "2026-04-15"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "ai-analyzer-v2"
family_name: "AI\u5065\u5eb7\u5206\u6790\u5668"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/ai-analyzer-v2"
upstream_skill: "skills/ai-analyzer-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "37"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "ai-analyzer-v2"
---

# AI健康分析器

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ai-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# AI健康分析器 基于AI技术的综合健康分析系统，提供智能健康洞察、风险预测和个性化建议。

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 核心功能, 使用说明, 数据源, 算法说明, 安全与合规, 相关命令.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The user wants AI-driven health analysis across multiple health datasets or lifestyle signals.
- You need anomaly detection, risk prediction, or personalized recommendations based on health inputs.
- You need generated health reports or question-answering over health metrics and trends.
- Use when the request clearly matches the imported source intent: AI驱动的综合健康分析系统，整合多维度健康数据、识别异常模式、预测健康风险、提供个性化建议。支持智能问答和AI健康报告生成。.
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

#### Imported: 核心功能

### 1. 智能健康分析
- **多维度数据整合**: 整合基础指标、生活方式、心理健康、医疗历史等4类数据源
- **异常模式识别**: 使用CUSUM、Z-score等算法检测异常值和变化点
- **相关性分析**: 计算不同健康指标之间的相关性（皮尔逊、斯皮尔曼）
- **趋势预测**: 基于历史数据进行趋势分析和预测

### 2. 健康风险预测
- **高血压风险**: 基于Framingham风险评分模型
- **糖尿病风险**: 基于ADA糖尿病风险评分标准
- **心血管疾病风险**: 基于ACC/AHA ASCVD指南
- **营养缺乏风险**: 基于RDA达成率和饮食模式分析
- **睡眠障碍风险**: 基于PSQI和睡眠模式分析

### 3. 个性化建议引擎
- **基础个性化**: 基于年龄、性别、BMI、活动水平等静态档案
- **建议分级**: Level 1（一般性）、Level 2（参考性）、Level 3（医疗建议）
- **循证依据**: 基于医学指南和循证医学证据
- **可操作性**: 提供具体、可行的改进建议

### 4. 自然语言交互
- **智能问答**: 支持健康数据查询、趋势分析、相关性查询等
- **上下文理解**: 维护对话历史，支持多轮对话
- **意图识别**: 识别用户查询意图，提供精准回复

### 5. AI健康报告生成
- **综合报告**: 包含所有维度健康数据、AI洞察、风险评估
- **快速摘要**: 关键指标概览、异常警示、主要建议
- **风险评估报告**: 各类疾病风险、风险因素分析、预防措施
- **趋势分析报告**: 多维度趋势、变化点识别、预测分析
- **HTML交互式报告**: ECharts图表、Tailwind CSS样式

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-analyzer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ai-analyzer-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ai-analyzer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ai-analyzer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ai-analyzer`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: 使用说明

### 触发条件

当用户提到以下场景时，使用此技能：

**通用询问**:
- ✅ "AI分析我的健康状况"
- ✅ "我的健康有什么风险？"
- ✅ "生成AI健康报告"
- ✅ "AI分析所有数据"

**风险预测**:
- ✅ "预测我的高血压风险"
- ✅ "我有糖尿病风险吗？"
- ✅ "评估我的心血管风险"
- ✅ "AI预测健康风险"

**智能问答**:
- ✅ "我的睡眠怎么样？"
- ✅ "运动对我的健康有什么影响？"
- ✅ "我应该如何改善健康状况？"
- ✅ "AI健康助手问答"

**报告生成**:
- ✅ "生成AI健康报告"
- ✅ "创建综合分析报告"
- ✅ "AI风险评估报告"

### 执行步骤

#### 步骤 1: 读取AI配置

```javascript
const aiConfig = readFile('data/ai-config.json');
const aiHistory = readFile('data/ai-history.json');
```

检查AI功能是否启用，验证数据源配置。

#### 步骤 2: 读取用户档案

```javascript
const profile = readFile('data/profile.json');
```

获取基础信息：年龄、性别、身高、体重、BMI等。

#### 步骤 3: 读取健康数据

根据配置的数据源读取相关数据：

```javascript
// 基础健康指标
const indexData = readFile('data/index.json');

// 生活方式数据
const fitnessData = readFile('data-example/fitness-tracker.json');
const sleepData = readFile('data-example/sleep-tracker.json');
const nutritionData = readFile('data-example/nutrition-tracker.json');

// 心理健康数据
const mentalHealthData = readFile('data-example/mental-health-tracker.json');

// 医疗历史
const medications = exists('data/medications.json') ? readFile('data/medications.json') : null;
const allergies = exists('data/allergies.json') ? readFile('data/allergies.json') : null;
```

#### 步骤 4: 数据整合和预处理

整合所有数据源，进行数据清洗、时间对齐和缺失值处理。

#### 步骤 5: 多维度分析

**相关性分析**: 计算睡眠↔情绪、运动↔体重、营养↔生化指标等关联

**趋势分析**: 使用线性回归、移动平均等方法识别趋势方向

**异常检测**: 使用CUSUM、Z-score算法检测异常值和变化点

#### 步骤 6: 风险预测

基于Framingham、ADA、ACC/AHA等标准进行风险预测：

- 高血压风险（10年概率）
- 糖尿病风险（10年概率）
- 心血管疾病风险（10年概率）
- 营养缺乏风险
- 睡眠障碍风险

#### 步骤 7: 生成个性化建议

根据分析结果生成三级建议：

- **Level 1**: 一般性建议（基于标准指南）
- **Level 2**: 参考性建议（基于个人数据）
- **Level 3**: 医疗建议（需医生确认，包含免责声明）

#### 步骤 8: 生成分析报告

**文本报告**: 包含总体评估、风险预测、关键趋势、相关性发现、个性化建议

**HTML报告**: 调用 `scripts/generate_ai_report.py` 生成包含ECharts图表的交互式报告

#### 步骤 9: 更新AI历史记录

记录分析结果到 `data/ai-history.json`

#### Imported: 数据源

| 数据源 | 文件路径 | 数据内容 |
|--------|---------|---------|
| 用户档案 | `data/profile.json` | 年龄、性别、身高、体重、BMI |
| 医疗记录 | `data/index.json` | 生化指标、影像检查 |
| 运动追踪 | `data-example/fitness-tracker.json` | 运动类型、时长、强度、MET值 |
| 睡眠追踪 | `data-example/sleep-tracker.json` | 睡眠时长、质量、PSQI评分 |
| 营养追踪 | `data-example/nutrition-tracker.json` | 饮食记录、营养素摄入、RDA达成率 |
| 心理健康 | `data-example/mental-health-tracker.json` | PHQ-9、GAD-7评分 |
| 用药记录 | `data/medications.json` | 药物名称、剂量、用法、依从性 |
| 过敏史 | `data/allergies.json` | 过敏原、严重程度 |

#### Imported: 算法说明

### 相关性分析
- **皮尔逊相关系数**: 连续变量（如睡眠时长与情绪评分）
- **斯皮尔曼相关系数**: 有序变量（如症状严重程度）

### 异常检测
- **CUSUM算法**: 时间序列变化点检测
- **Z-score方法**: 统计异常值检测（|z| > 2）
- **IQR方法**: 四分位数异常值检测

### 风险预测
- **Framingham风险评分**: 高血压、心血管疾病风险
- **ADA风险评分**: 2型糖尿病风险
- **ASCVD计算器**: 动脉粥样硬化心血管病风险

#### Imported: 安全与合规

### 必须遵循
- ❌ 不给出医疗诊断
- ❌ 不给出具体用药剂量建议
- ❌ 不判断生死预后
- ❌ 不替代医生建议
- ✅ 所有分析必须标注"仅供参考"
- ✅ Level 3建议必须包含免责声明
- ✅ 高风险预测必须建议咨询医生

### 隐私保护
- ✅ 所有数据保持本地
- ✅ 无外部API调用
- ✅ HTML报告独立运行

#### Imported: 相关命令

- `/ai analyze` - AI综合分析
- `/ai predict [risk_type]` - 健康风险预测
- `/ai chat [query]` - 自然语言问答
- `/ai report generate [type]` - 生成AI健康报告
- `/ai status` - 查看AI功能状态

#### Imported: 技术实现

### 工具限制
此Skill仅使用以下工具：
- **Read**: 读取JSON数据文件
- **Grep**: 搜索特定模式
- **Glob**: 按模式查找数据文件
- **Write**: 生成HTML报告和更新历史记录

### 性能优化
- 增量读取：仅读取指定时间范围的数据文件
- 数据缓存：避免重复读取同一文件
- 延迟计算：按需生成图表数据

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

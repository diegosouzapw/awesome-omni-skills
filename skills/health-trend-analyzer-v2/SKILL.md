---
name: health-trend-analyzer-v2
description: "\u5065\u5eb7\u8d8b\u52bf\u5206\u6790\u5668 workflow skill. Use this skill when the user needs \u5206\u6790\u4e00\u6bb5\u65f6\u95f4\u5185\u5065\u5eb7\u6570\u636e\u7684\u8d8b\u52bf\u548c\u6a21\u5f0f\u3002\u5173\u8054\u836f\u7269\u3001\u75c7\u72b6\u3001\u751f\u547d\u4f53\u5f81\u3001\u5316\u9a8c\u7ed3\u679c\u548c\u5176\u4ed6\u5065\u5eb7\u6307\u6807\u7684\u53d8\u5316\u3002\u8bc6\u522b\u4ee4\u4eba\u62c5\u5fe7\u7684\u8d8b\u52bf\u3001\u6539\u5584\u60c5\u51b5\uff0c\u5e76\u63d0\u4f9b\u6570\u636e\u9a71\u52a8\u7684\u6d1e\u5bdf\u3002\u5f53\u7528\u6237\u8be2\u95ee\u5065\u5eb7\u8d8b\u52bf\u3001\u6a21\u5f0f\u3001\u968f\u65f6\u95f4\u7684\u53d8\u5316\u6216\"\u6211\u7684\u5065\u5eb7\u72b6\u51b5\u6709\u4ec0\u4e48\u53d8\u5316\uff1f\"\u65f6\u4f7f\u7528\u3002\u652f\u6301\u591a\u7ef4\u5ea6\u5206\u6790\uff08\u4f53\u91cd/BMI\u3001\u75c7\u72b6\u3001\u836f\u7269\u4f9d\u4ece\u6027\u3001\u5316\u9a8c\u7ed3\u679c\u3001\u60c5\u7eea\u7761\u7720\uff09\uff0c\u76f8\u5173\u6027\u5206\u6790\uff0c\u53d8\u5316\u68c0\u6d4b\uff0c\u4ee5\u53ca\u4ea4\u4e92\u5f0fHTML\u53ef\u89c6\u5316\u62a5\u544a\uff08ECharts\u56fe\u8868\uff09\u3002 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["health-trend-analyzer-v2", "health-trend-analyzer", "bmi", "html", "echarts", "frontend"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# 健康趋势分析器

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/health-trend-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# 健康趋势分析器 分析一段时间内健康数据的趋势和模式，识别变化、相关性，并提供数据驱动的健康洞察。

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 核心功能, 使用说明, 输出格式, 数据源, 分析算法, 安全与隐私.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 需要分析一段时间内健康数据的趋势、相关性或显著变化时使用。
- 任务涉及体重、症状、用药、化验、情绪或睡眠等多维度随时间变化。
- 用户询问“最近健康状况有什么变化”或需要趋势报告时使用。
- Use when the request clearly matches the imported source intent: 分析一段时间内健康数据的趋势和模式。关联药物、症状、生命体征、化验结果和其他健康指标的变化。识别令人担忧的趋势、改善情况，并提供数据驱动的洞察。当用户询问健康趋势、模式、随时间的变化或"我的健康状况有什么变化？"时使用。支持多维度分析（体重/BMI、症状、药物依从性、化验结果、情绪睡眠），相关性分析，变化检测，以及交互式HTML可视化报告（ECharts图表）。.
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

### 1. 多维度趋势分析
- **体重/BMI 趋势**：追踪体重和BMI随时间的变化，评估健康趋势
- **症状模式**：识别反复出现的症状、频率变化、潜在诱因
- **药物依从性**：分析用药规律，识别漏服模式和改善空间
- **化验结果趋势**：追踪生化指标变化（胆固醇、血糖、血压等）
- **情绪与睡眠**：关联情绪状态与睡眠质量，识别心理健康趋势

### 2. 相关性分析引擎
- **药物-症状相关性**：识别新药物是否与症状变化相关
- **生活方式影响**：关联饮食/睡眠与症状和情绪
- **治疗效果评估**：衡量治疗是否导致改善
- **周期-症状相关性**：女性健康追踪中的周期相关性

### 3. 变化检测
- **显著变化**：警告快速体重变化、新症状、药物变化
- **恶化模式**：早期识别健康状况下降
- **改善识别**：强调积极的健康变化
- **阈值警报**：接近危险水平时警告（辐射、BMI极值）

### 4. 预测性洞察
- **风险评估**：基于趋势识别风险因素
- **预防建议**：基于模式建议预防措施
- **早期预警**：在问题变得严重之前预测

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @health-trend-analyzer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @health-trend-analyzer-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @health-trend-analyzer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @health-trend-analyzer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/health-trend-analyzer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@grafana-dashboards-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@graphql-architect-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@graphql-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@growth-engine-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

**通用询问**：
- ✅ "过去一段时间我的健康有什么变化？"
- ✅ "分析我的健康趋势"
- ✅ "我的身体状况有什么变化？"
- ✅ "健康状况总结"

**具体维度**：
- ✅ "我的体重/BMI有什么趋势？"
- ✅ "分析我的症状模式"
- ✅ "我的用药依从性怎么样？"
- ✅ "我的化验指标有什么变化？"
- ✅ "我的情绪和睡眠趋势"

**相关性分析**：
- ✅ "我的症状和什么相关？"
- ✅ "我的药物有效吗？"
- ✅ "睡眠和我的情绪有什么关系？"

**时间范围**：
- 默认分析**过去3个月**的数据
- 支持："过去1个月"、"过去6个月"、"过去1年"
- 支持："2025年1月至今"、"最近90天"

### 执行步骤

#### 步骤 1：确定分析时间范围

从用户输入中提取时间范围，或使用默认值（3个月）。

#### 步骤 2：读取健康数据

读取以下数据源：

```javascript
// 1. 个人档案（BMI、体重）
const profile = readFile('data/profile.json');

// 2. 症状记录
const symptomFiles = glob('data/symptoms/**/*.json');
const symptoms = readAllJson(symptomFiles);

// 3. 情绪记录
const moodFiles = glob('data/mood/**/*.json');
const moods = readAllJson(moodFiles);

// 4. 饮食记录
const dietFiles = glob('data/diet/**/*.json');
const diets = readAllJson(dietFiles);

// 5. 用药日志
const medicationLogs = glob('data/medication-logs/**/*.json');

// 6. 女性健康数据（如适用）
const cycleData = readFile('data/cycle-tracker.json');
const pregnancyData = readFile('data/pregnancy-tracker.json');
const menopauseData = readFile('data/menopause-tracker.json');

// 7. 过敏史
const allergies = readFile('data/allergies.json');

// 8. 辐射记录
const radiation = readFile('data/radiation-records.json');
```

#### 步骤 3：数据过滤

根据时间范围过滤数据：

```javascript
function filterByDate(data, startDate, endDate) {
  return data.filter(item => {
    const itemDate = new Date(item.date || item.created_at);
    return itemDate >= startDate && itemDate <= endDate;
  });
}
```

#### 步骤 4：趋势分析

对每个数据维度进行趋势分析：

**4.1 体重/BMI 趋势**
- 提取历史体重数据
- 计算BMI变化
- 识别趋势方向（上升/下降/稳定）
- 评估变化幅度

**4.2 症状模式**
- 统计症状频率
- 识别高频症状
- 分析症状时间模式
- 检测症状诱因

**4.3 药物依从性**
- 计算总体依从率
- 分析各药物依从性
- 识别漏服模式
- 评估改善建议

**4.4 化验结果**
- 追踪多次报告中的生化指标
- 与参考范围对比
- 识别改善/恶化
- 标记异常指标

**4.5 情绪与睡眠**
- 关联情绪评分与睡眠时长
- 识别情绪波动模式
- 检测压力水平
- 评估心理健康趋势

#### 步骤 5：相关性分析

使用统计方法识别相关性：

```javascript
// 皮尔逊相关系数
function pearsonCorrelation(x, y) {
  // 计算相关系数
  // 返回值范围：-1（负相关）到 1（正相关）
}

// 应用场景
- 药物开始日期 vs 症状频率
- 睡眠时长 vs 情绪评分
- 体重变化 vs 饮食记录
- 运动量 vs 情绪状态
```

#### 步骤 6：变化检测

识别显著变化：

```javascript
// 变化点检测
function detectChangePoints(timeSeries) {
  // 使用统计方法检测显著变化点
  // 例如：体重突然下降、症状突然增加
}

// 阈值警报
function checkThresholds(value, thresholds) {
  // 检查是否接近或超过危险阈值
  // 例如：BMI > 30、辐射剂量 > 安全限
}
```

#### 步骤 7：生成洞察

基于分析结果生成预测性洞察：

```javascript
// 风险评估
function assessRisks(trends) {
  // 识别高风险趋势
  // 例如：快速体重下降、频繁症状
}

// 预防建议
function generateRecommendations(trends, correlations) {
  // 基于模式建议预防措施
  // 例如：改善睡眠、提高用药依从性
}

// 早期预警
function earlyWarnings(trends) {
  // 在问题变得严重之前预测
  // 例如：症状频率上升、情绪持续低落
}
```

#### 步骤 8：生成可视化报告

生成交互式HTML报告：

1. **数据汇总**：生成JSON格式的分析结果
2. **HTML模板渲染**：将数据注入HTML模板
3. **ECharts图表配置**：配置6种交互式图表
4. **保存文件**：保存为独立HTML文件

详细输出格式参见：数据源说明

#### Imported: 输出格式

### 文本报告（简洁版）

```
健康趋势分析报告
━━━━━━━━━━━━━━━━━━━━━━━━━━
生成时间: 2025-12-31
分析周期: 过去3个月 (2025-10-01 至 2025-12-31)

📊 总体评估
━━━━━━━━━━━━━━━━━━━━━━━━━━
改善中: 体重管理、胆固醇水平
稳定: 血糖控制、情绪状态
需关注: 用药依从性、睡眠质量

📊 体重/BMI 趋势
├─ 当前体重: 68.5 kg
├─ 当前 BMI: 23.1（正常范围）
├─ 3个月变化: -2.3 kg（-3.2%）
├─ 趋势: 📉 逐渐减重
└─ 评估: ✅ 积极趋势，在健康范围内

💊 药物依从性
├─ 当前药物: 3种
├─ 总体依从率: 78%
├─ 漏服次数: 8次
├─ 最好: 阿司匹林 (95%)
└─ 需改进: 氨氯地平 (65%)

⚠️ 症状模式
├─ 最频繁: 头痛（过去3个月 12次）
├─ 趋势: 📉 频率下降（较上期减少4次）
├─ 潜在诱因: 与睡眠质量识别出中等相关（r=0.62）
└─ 建议: 继续改善睡眠模式

🧪 化验结果趋势
├─ 胆固醇: 240 → 210 mg/dL（改善 ✅）
├─ 血糖: 5.6 → 5.4 mmol/L（稳定）
├─ 上次检查: 30天前
└─ 建议: 3个月后复查

😊 情绪与睡眠
├─ 平均情绪评分: 6.8/10
├─ 平均睡眠时长: 6.5小时
├─ 趋势: 情绪稳定，睡眠略有改善
└─ 相关性: 睡眠时长与情绪评分强相关（r=0.78）

🔗 相关性分析
━━━━━━━━━━━━━━━━━━━━━━━━━━
• 睡眠时长 ↔ 情绪评分: 强正相关 (r=0.78)
• 体重变化 ↔ 饮食记录: 中等相关 (r=0.55)
• 用药依从性 ↔ 症状频率: 中等负相关 (r=-0.62)

💡 风险评估与建议
━━━━━━━━━━━━━━━━━━━━━━━━━━

🟢 继续保持
• 当前体重管理方法有效
• 胆固醇水平改善明显

🟡 需要关注
• 提高氨氯地平依从性（设置提醒）
• 增加睡眠时长至7-8小时

📅 复查计划
• 3个月后复查血脂四项
• 1个月后评估用药依从性改善

━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ 免责声明
本分析仅供参考，不替代专业医疗诊断。
请咨询医生获取专业建议。
```

### HTML可视化报告（完整版）

生成包含ECharts交互式图表的独立HTML文件，包含：

1. **总体评估卡片**：关键指标一目了然
2. **体重/BMI趋势图**：双Y轴折线图（体重 + BMI）
3. **症状频率图**：颜色编码的柱状图（高频红/中频黄/低频绿）
4. **药物依从性仪表盘**：总体依从率 + 各药物详情
5. **化验结果趋势图**：多系列折线图 + 参考线
6. **相关性热图**：热力图展示变量间相关性
7. **情绪与睡眠面积图**：双Y轴面积图

**HTML文件特点**：
- ✅ 完全独立（所有依赖通过CDN）
- ✅ 交互式图表（缩放、导出、图例切换）
- ✅ 响应式设计（移动端适配）
- ✅ 可打印（打印优化样式）
- ✅ 可分享（发送给医生）

#### Imported: 数据源

### 主要数据源

| 数据源 | 文件路径 | 数据内容 |
|--------|---------|---------|
| 个人档案 | `data/profile.json` | 体重、身高、BMI历史 |
| 症状记录 | `data/symptoms/**/*.json` | 症状名称、严重程度、持续时间 |
| 情绪记录 | `data/mood/**/*.json` | 情绪评分、睡眠质量、压力水平 |
| 饮食记录 | `data/diet/**/*.json` | 餐次、食物、卡路里、营养素 |
| 用药日志 | `data/medication-logs/**/*.json` | 用药时间、依从性记录 |
| 化验结果 | `data/medical_records/**/*.json` | 生化指标、参考范围 |

### 辅助数据源

| 数据源 | 文件路径 | 数据内容 |
|--------|---------|---------|
| 女性周期 | `data/cycle-tracker.json` | 周期长度、症状记录 |
| 孕期追踪 | `data/pregnancy-tracker.json` | 孕周、体重、检查记录 |
| 更年期 | `data/menopause-tracker.json` | 症状、HRT使用 |
| 过敏史 | `data/allergies.json` | 过敏原、严重程度 |
| 辐射记录 | `data/radiation-records.json` | 累积辐射剂量 |

详细数据结构说明请参考：data-sources.md

#### Imported: 分析算法

### 时间序列分析
- 趋势检测（线性回归）
- 季节性分析
- 异常值检测

### 相关性分析
- 皮尔逊相关系数（连续变量）
- 斯皮尔曼相关系数（有序变量）
- 交叉相关分析（时间序列）

### 变化点检测
- CUSUM算法
- 滑动窗口t检验
- 贝叶斯变化点检测

### 统计指标
- 均值、中位数、标准差
- 百分位数（25%, 50%, 75%）
- 变化率（环比、同比）

详细算法说明请参考：algorithms.md

#### Imported: 安全与隐私

### 必须遵循

- ❌ 不给出医疗诊断
- ❌ 不给出具体用药建议
- ❌ 不判断生死预后
- ❌ 标注免责声明（仅供参考）

### 信息准确度

- ✅ 仅基于已记录的数据进行分析
- ✅ 不推测或推断缺失信息
- ✅ 明确标注数据来源和时间范围
- ✅ 建议应由医疗专业人员审查

### 隐私保护

- ✅ 所有数据保持本地
- ✅ 无外部API调用
- ✅ 分析结果仅保存在本地
- ✅ HTML报告独立运行（无数据传输）

#### Imported: 错误处理

### 数据缺失
- **无数据**：输出"暂无数据，建议先记录[数据类型]"
- **数据不足**：输出"数据不足（需要至少1个月数据才能进行趋势分析）"
- **数据范围窄**：使用现有数据，提示"建议延长记录时间以获得更准确的趋势"

### 分析失败
- **无法计算趋势**：输出"无法计算趋势，数据点不足"
- **相关性分析失败**：输出"相关性分析需要更多数据"
- **图表渲染失败**：降级为文本报告

#### Imported: 使用示例

### 示例 1：一般健康趋势
**用户**："过去3个月我的健康有什么变化？"
**输出**：生成完整的HTML报告，包含所有维度的趋势分析

### 示例 2：症状分析
**用户**："分析我的症状模式"
**输出**：重点分析症状频率、诱因、趋势

### 示例 3：体重趋势
**用户**："我的体重有什么趋势？"
**输出**：重点分析体重/BMI变化、与饮食/运动的相关性

### 示例 4：药物有效性
**用户**："我的降压药有效吗？"
**输出**：关联药物开始日期与血压读数、症状改善

更多完整示例请参考：examples.md

#### Imported: 相关命令

- `/symptom`：记录症状
- `/mood`：记录情绪
- `/diet`：记录饮食
- `/medication`：管理药物和用药记录
- `/query`：查询特定数据点

#### Imported: 技术实现

### 工具限制

此Skill仅使用以下工具（无需额外权限）：
- **Read**：读取JSON数据文件
- **Grep**：搜索特定模式
- **Glob**：按模式查找数据文件
- **Write**：生成HTML报告（保存到`data/health-reports/`）

### 性能优化

- 增量读取：仅读取指定时间范围的数据文件
- 数据缓存：避免重复读取同一文件
- 延迟计算：按需生成图表数据

### 扩展性

- 支持添加新的数据维度
- 支持自定义图表类型
- 支持自定义分析算法

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

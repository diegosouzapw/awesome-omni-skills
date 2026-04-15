---
name: tcm-constitution-analyzer
description: "\u4e2d\u533b\u4f53\u8d28\u8fa8\u8bc6\u5206\u6790\u5668\u6280\u80fd workflow skill. Use this skill when the user needs \u5206\u6790\u4e2d\u533b\u4f53\u8d28\u6570\u636e\u3001\u8bc6\u522b\u4f53\u8d28\u7c7b\u578b\u3001\u8bc4\u4f30\u4f53\u8d28\u7279\u5f81,\u5e76\u63d0\u4f9b\u4e2a\u6027\u5316\u517b\u751f\u5efa\u8bae\u3002\u652f\u6301\u4e0e\u8425\u517b\u3001\u8fd0\u52a8\u3001\u7761\u7720\u7b49\u5065\u5eb7\u6570\u636e\u7684\u5173\u8054\u5206\u6790\u3002 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["tcm-constitution-analyzer", "data-ai"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# 中医体质辨识分析器技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/tcm-constitution-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# 中医体质辨识分析器技能 分析中医体质数据,识别体质类型,评估体质特征,并提供个性化养生改善建议。

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 功能, 使用说明, 输出格式, 评估日期, 评估结果, 体质特征分析.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 你需要根据中医体质分类标准评估用户体质，并识别主导体质与兼夹体质。
- 你想结合营养、运动、睡眠等健康数据分析体质特征、风险和变化趋势。
- 你需要面向个体化调理的养生建议、趋势跟踪和相关性分析结果。
- Use when the request clearly matches the imported source intent: 分析中医体质数据、识别体质类型、评估体质特征,并提供个性化养生建议。支持与营养、运动、睡眠等健康数据的关联分析。.
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

### 1. 体质辨识评估

基于《中医体质分类与判定》标准进行体质辨识。

**评估维度**:
- 9种体质类型评分(平和质、气虚质、阳虚质、阴虚质、痰湿质、湿热质、血瘀质、气郁质、特禀质)
- 主体质判定
- 兼夹体质识别
- 体质特征分析

**评估方法**:
- 60题标准化问卷
- 5分制评分(没有/很少/有时/经常/总是)
- 转化分数计算(0-100分)

**输出**:
- 体质类型判定结果
- 各体质评分
- 体质特征描述
- 个体化养生建议

### 2. 体质特征分析

综合评估用户的体质特征。

**分析内容**:
- **形体特征**:
  - 体型特点
  - 面色表现
  - 舌象脉象

- **心理特征**:
  - 性格特点
  - 情绪倾向

- **发病倾向**:
  - 易感疾病
  - 健康风险

- **适应能力**:
  - 环境适应
  - 季节适应

**输出**:
- 体质类型分类
- 特征描述
- 风险评估
- 调理优先级

### 3. 体质变化趋势分析

追踪体质变化,评估调理效果。

**分析内容**:
- 多次评估对比
- 评分变化趋势
- 体质稳定性分析
- 调理效果评估

**输出**:
- 趋势图表
- 改善幅度
- 稳定性评估
- 继续调理建议

### 4. 相关性分析

分析体质与其他健康指标的相关性。

**支持的相关性分析**:
- **体质 ↔ 营养**:
  - 体质类型与饮食偏好的关系
  - 营养状况对体质的影响
  - 个性化饮食建议

- **体质 ↔ 运动**:
  - 不同体质适合的运动类型
  - 运动对体质改善的作用

- **体质 ↔ 睡眠**:
  - 体质与睡眠质量的关系
  - 睡眠对体质的影响

- **体质 ↔ 慢性病**:
  - 不同体质易患疾病
  - 体质与疾病的关系

**输出**:
- 相关系数
- 相关性强度
- 统计显著性
- 实践建议

### 5. 个性化建议生成

基于体质类型生成个性化养生建议。

**建议类型**:
- **饮食调养**:
  - 宜食食物清单
  - 忌食食物清单
  - 推荐食谱
  - 饮食原则

- **起居调摄**:
  - 作息建议
  - 环境要求
  - 生活习惯

- **运动锻炼**:
  - 推荐运动类型
  - 运动频次和强度
  - 注意事项

- **情志调摄**:
  - 情绪管理
  - 心理调节

- **穴位保健**:
  - 推荐穴位
  - 按摩方法
  - 艾灸建议

- **中药调理**:
  - 推荐方剂
  - 方剂组成
  - 用法用量
  - 注意事项

**建议依据**:
- 中医体质理论
- 用户体质类型
- 季节因素
- 用户健康状况

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tcm-constitution-analyzer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @tcm-constitution-analyzer against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @tcm-constitution-analyzer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @tcm-constitution-analyzer using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/tcm-constitution-analyzer`, fails to mention provenance, or does not use any copied source files at all.
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

当用户请求以下内容时触发本技能:
- 中医体质辨识评估
- 体质类型查询
- 体质特征分析
- 中医养生建议
- 体质趋势分析
- 体质与其他健康指标的关联分析

### 执行步骤

#### 步骤 1: 确定分析范围

明确用户请求的分析类型:
- 体质辨识评估
- 体质特征查询
- 养生建议获取
- 趋势分析
- 相关性分析

#### 步骤 2: 读取数据

**主要数据源**:
1. `data/constitutions.json` - 体质知识库
2. `data/constitution-recommendations.json` - 养生建议库
3. `data-example/tcm-constitution-tracker.json` - 体质追踪主数据
4. `data-example/tcm-constitution-logs/YYYY-MM/YYYY-MM-DD.json` - 每日评估记录

**关联数据源**:
1. `data-example/profile.json` - 基础信息
2. `data-example/nutrition-tracker.json` - 营养数据
3. `data-example/fitness-tracker.json` - 运动数据
4. `data-example/sleep-tracker.json` - 睡眠数据

#### 步骤 3: 数据分析

根据分析类型执行相应的分析算法:

**体质评分算法**:
```python
def calculate_constitution_scores(answers):
    """
    基于《中医体质分类与判定》标准

    计算公式:
    转化分数 = [(原始分数 - 题目数) / (题目数 × 4)] × 100

    其中:
    - 原始分数 = 各题目得分之和
    - 题目数 = 该体质的问题数量
    """
    scores = {}
    for constitution, questions in CONSTITUTION_QUESTIONS.items():
        original_score = sum(answers[q] for q in questions)
        question_count = len(questions)
        converted_score = ((original_score - question_count) / (question_count * 4)) * 100
        scores[constitution] = round(converted_score, 1)
    return scores
```

**体质判定算法**:
```python
def determine_constitution_type(scores):
    """
    判定逻辑:
    1. 平和质判定:
       - 得分 ≥ 60分
       - 其他8种体质得分均 < 40分

    2. 偏颇体质判定:
       - 得分最高的体质为判定结果

    3. 兼夹体质判定:
       - 次高分的体质得分 ≥ 40分
       - 则为兼夹体质
    """
    peaceful_score = scores['平和质']
    other_scores = {k: v for k, v in scores.items() if k != '平和质'}

    # 判定是否为平和质
    if peaceful_score >= 60 and all(s < 40 for s in other_scores.values()):
        return {
            'primary': '平和质',
            'secondary': [],
            'type': 'balanced'
        }

    # 偏颇体质判定
    sorted_scores = sorted(other_scores.items(), key=lambda x: x[1], reverse=True)
    primary = sorted_scores[0][0]

    # 判断兼夹体质
    secondary = [k for k, v in sorted_scores[1:3] if v >= 40]

    return {
        'primary': primary,
        'secondary': secondary,
        'type': 'compound' if secondary else 'single'
    }
```

**趋势分析算法**:
- 线性回归计算趋势
- 移动平均平滑波动
- 统计显著性检验

#### 步骤 4: 生成报告

按照标准格式输出分析报告(见"输出格式"部分)

---

#### Imported: 输出格式

### 体质辨识评估报告

```markdown
# 中医体质辨识评估报告

#### Imported: 评估日期

2025-06-20

#### Imported: 评估结果

### 体质类型判定
- **主体质**: 气虚质
- **兼夹体质**: 阳虚质
- **体质类型**: 兼夹体质

### 各体质评分

| 体质类型 | 评分 | 判定 |
|---------|------|------|
| 气虚质 | 78.5 | ⚠️ 偏颇 |
| 阳虚质 | 62.3 | ⚠️ 偏颇 |
| 平和质 | 42.1 | 正常 |
| 痰湿质 | 38.7 | 正常 |
| 气郁质 | 35.2 | 正常 |
| 阴虚质 | 32.1 | 正常 |
| 湿热质 | 28.4 | 正常 |
| 血瘀质 | 25.6 | 正常 |
| 特禀质 | 18.3 | 正常 |

---

#### Imported: 体质特征分析

### 气虚质特征

**形体特征**:
- 肌肉松软
- 容易疲乏
- 声音低弱
- 喜静懒言
- 容易出汗

**心理特征**:
- 性格内向
- 不喜冒险
- 情绪不稳定

**发病倾向**:
- 易感冒
- 易内脏下垂
- 易疲劳

**适应能力**:
- 不耐受风、寒、暑、湿邪
- 秋季易发病

### 阳虚质特征

**形体特征**:
- 畏寒怕冷
- 手足不温
- 喜热饮食

**心理特征**:
- 性格多沉静
- 内向

**发病倾向**:
- 易患痰饮、肿胀、腹泻
- 易感寒邪

**适应能力**:
- 不耐寒邪,耐受夏热
- 冬季易发病

---

#### Imported: 养生建议

### 饮食调养

**原则**: 补气健脾,温补肾阳

**宜食食物**:
- 补气类: 山药、大枣、黄芪、人参、白术
- 温阳类: 羊肉、韭菜、花椒、生姜、桂圆
- 健脾类: 薏苡仁、茯苓、扁豆

**忌食食物**:
- 生冷寒凉: 冰淇淋、冰镇饮料、生鱼片
- 油腻厚味: 油炸食品、肥肉
- 辛辣燥热: 辣椒、花椒

**推荐食谱**:
1. 黄芪炖鸡
2. 山药粥
3. 红枣茯苓粥
4. 当归生姜羊肉汤

**饮食建议**:
- 少食多餐,细嚼慢咽
- 饮食宜温热,忌生冷
- 饭后适当休息

### 起居调摄

**作息建议**:
- 保证充足睡眠(8小时以上)
- 早睡晚起
- 避免熬夜

**环境要求**:
- 保持环境温暖干燥
- 避免受风寒
- 注意保暖,特别是腰腹部和脚部

**生活习惯**:
- 避免过度劳累
- 劳逸结合
- 可适当晒太阳
- 温水泡脚

### 运动锻炼

**原则**: 温和运动,避免剧烈

**推荐运动**:
- 太极拳
- 八段锦
- 散步
- 气功
- 瑜伽

**运动建议**:
- 频率: 每日1-2次
- 时长: 每次20-30分钟
- 强度: 低至中等强度
- 注意: 以不感到过度疲劳为宜

**注意事项**:
- 避免剧烈运动
- 运动后及时休息
- 循序渐进
- 避免在寒冷环境中运动

### 情志调摄

**原则**: 保持心情舒畅,避免过度思虑

**调摄方法**:
- 保持积极乐观
- 避免过度思虑
- 适当参加社交活动
- 学会放松

**情绪管理**:
- 培养兴趣爱好
- 保持社交活动
- 学会调节情绪

### 穴位保健

**推荐穴位**:

#### 1. 足三里
- **位置**: 小腿外侧,膝眼下3寸
- **功效**: 健脾益气,强壮身体
- **方法**: 每日按揉3-5分钟,可艾灸

#### 2. 气海
- **位置**: 肚脐下1.5寸
- **功效**: 培补元气
- **方法**: 每日按揉3-5分钟,可艾灸

#### 3. 关元
- **位置**: 肚脐下3寸
- **功效**: 培元固本,温补肾阳
- **方法**: 每日按揉3-5分钟,可艾灸10-15分钟

### 中药调理

⚠️ **重要提醒**: 以下内容仅供中医师参考,不可自行抓药服用

**推荐方剂**: 四君子汤加减

**方源**: 《太平惠民和剂局方》

**方剂组成**:
- 人参: 9-15g, 大补元气
- 白术: 9-12g, 健脾益气
- 茯苓: 9-15g, 健脾渗湿
- 甘草: 6-9g, 调和诸药

**随症加减**:
- 气虚重者: 加黄芪 15-30g
- 脾虚湿盛者: 加薏苡仁 15-30g, 扁豆 10-15g
- 食少腹胀者: 加陈皮 6-9g, 砂仁 3-6g

**用法**: 水煎服,日一剂,分早晚两次温服

**注意事项**:
- ⚠️ 需经专业中医师辨证后使用
- ⚠️ 孕妇、儿童、体弱者需医师指导
- ⚠️ 服药期间忌食生冷、油腻、辛辣食物
- ⚠️ 感冒发烧时暂停服用
- ⚠️ 服用期间出现不良反应立即停用并就医

---

#### Imported: 季节调养建议

### 春季调养
- 养阳为主,顺应生发之气
- 多食韭菜、菠菜、山药
- 保持心情舒畅,适当运动
- 注意防风保暖

### 夏季调养
- 清暑热,养心神
- 多食绿豆、冬瓜、苦瓜
- 注意防暑降温
- 保持心情平和

### 秋季调养
- 养收润燥,养肺
- 多食银耳、百合、梨
- 注意保暖,避免受凉
- 保持情绪稳定

### 冬季调养
- 养藏为主,温补肾阳
- 多食羊肉、核桃、栗子
- 注意保暖,特别是腰腹部
- 早睡晚起,避免过度劳累

---

#### Imported: 与其他健康指标的关联

### 体质与营养
- 气虚质、阳虚质: 宜温补饮食
- 阴虚质、湿热质: 宜清淡饮食
- 痰湿质: 宜低脂低糖,控制体重

### 体质与运动
- 气虚质、阳虚质: 温和运动为主
- 湿热质、痰湿质: 适度加强运动强度
- 阴虚质: 避免剧烈运动

### 体质与睡眠
- 气虚质、阳虚质: 保证充足睡眠
- 阴虚质: 避免熬夜
- 气郁质: 疏肝解郁,改善睡眠质量

### 体质与慢性病
- 痰湿质: 易患高血压、糖尿病、高脂血症
- 湿热质: 易患代谢综合征
- 血瘀质: 易患心血管疾病
- 气郁质: 易患抑郁症、焦虑症

---

#### Imported: 医学安全边界

⚠️ **重要声明**

本分析仅供健康参考,不构成医疗诊断或治疗建议。

### 分析能力范围

✅ **能做到**:
- 中医体质辨识评估
- 体质特征分析
- 一般性养生建议
- 中医知识普及
- 体质趋势追踪

❌ **不做到**:
- 中医疾病诊断
- 中药处方开具
- 替代中医师诊疗
- 针灸等治疗操作
- 处理严重健康问题

### 危险信号检测

在分析过程中检测以下危险信号:

1. **严重体质偏颇**:
   - 单一偏颇体质得分 > 80分
   - 多种偏颇体质兼夹

2. **健康风险提示**:
   - 痰湿质 → 高血压、糖尿病风险
   - 湿热质 → 代谢综合征风险
   - 血瘀质 → 心血管疾病风险
   - 气郁质 → 抑郁症风险

3. **就医引导**:
   - 疑似疾病症状 → 建议就医
   - 需要中药治疗 → 咨询中医师
   - 体质调理无效 → 寻求专业帮助

### 建议分级

**Level 1: 一般性建议**
- 基于中医体质理论
- 适用于一般人群
- 无需医疗监督

**Level 2: 参考性建议**
- 基于用户体质和健康状况
- 需结合个人情况
- 建议咨询中医师

**Level 3: 医疗建议**
- 涉及中药调理
- 需中医师确认
- 不得自行服用中药

---

#### Imported: 数据结构

### 体质评估记录

```json
{
  "date": "2025-06-20",
  "questionnaire": {
    "questions": [
      {
        "id": 1,
        "constitution": "气虚质",
        "question": "您容易疲乏吗?",
        "answer": 4,
        "weight": 1.0
      }
    ],
    "total_questions": 60
  },
  "results": {
    "primary_constitution": "气虚质",
    "secondary_constitutions": ["阳虚质"],
    "constitution_scores": {
      "平和质": 42.1,
      "气虚质": 78.5,
      "阳虚质": 62.3,
      "阴虚质": 32.1,
      "痰湿质": 38.7,
      "湿热质": 28.4,
      "血瘀质": 25.6,
      "气郁质": 35.2,
      "特禀质": 18.3
    },
    "constitution_type": "compound"
  },
  "characteristics": {
    "physical": ["容易疲劳", "气短", "自汗"],
    "psychological": ["性格内向", "不喜欢说话"]
  },
  "recommendations": {
    "diet": {
      "principles": ["补气健脾", "温补肾阳"],
      "beneficial": ["山药", "大枣", "黄芪"],
      "avoid": ["生冷寒凉", "油腻厚味"]
    },
    "exercise": "温和运动,如太极拳、散步",
    "lifestyle": "规律作息,避免过度劳累",
    "acupoints": ["足三里", "气海", "关元"]
  }
}
```

---

#### Imported: 参考资源

### 中医体质理论
- 《中医体质分类与判定》标准
- 王琦九种体质学说
- 《中医体质学》教材

### 养生原则
- 中医基础理论
- 四季养生原则
- 辨证施治原则

### 中药方剂
- 《方剂学》教材
- 《太平惠民和剂局方》
- 《金匮要略》

---

**技能版本**: v1.0
**创建日期**: 2026-01-08
**维护者**: WellAlly Tech

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

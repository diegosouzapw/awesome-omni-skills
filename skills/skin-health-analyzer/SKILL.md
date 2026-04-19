---
name: skin-health-analyzer
description: "\u76ae\u80a4\u5065\u5eb7\u5206\u6790\u6280\u80fd workflow skill. Use this skill when the user needs Analyze skin health data, identify skin problem patterns, assess skin health status. Supports correlation analysis with nutrition, chronic diseases, and medication data and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["skin-health-analyzer", "analyze", "skin", "health", "data", "identify", "problem", "patterns"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# 皮肤健康分析技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/skin-health-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# 皮肤健康分析技能

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 技能概述, 医学免责声明, 核心功能, 使用场景, 数据分析方法, 质量保证.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when tackling tasks related to its primary domain or functionality as described above.
- Use when the request clearly matches the imported source intent: Analyze skin health data, identify skin problem patterns, assess skin health status. Supports correlation analysis with nutrition, chronic diseases, and medication data.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: 技能概述

本技能提供全面的皮肤健康数据分析功能，包括趋势识别、风险评估、问题诊断和个性化建议生成。特别强调痣的监测和皮肤癌预防。

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skin-health-analyzer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @skin-health-analyzer against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @skin-health-analyzer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @skin-health-analyzer using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/skin-health-analyzer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@server-management` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-observability` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sexual-health-analyzer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 医学免责声明

⚠️ **重要提示**：本技能提供的数据分析和建议仅供参考，不构成医学诊断或治疗建议。

- 所有皮肤问题应由专业皮肤科医生诊断和治疗
- 痣的异常变化必须立即就医检查
- 皮肤癌需要专业诊断，不能仅依靠自我评估
- 分析结果不能替代专业皮肤科检查
- 紧急情况应立即就医
- 请遵循皮肤科医生的专业建议

#### Imported: 核心功能

### 1. 趋势分析

#### 皮肤问题发展趋势
- 识别痤疮、湿疹等问题的发生模式
- 分析问题的季节性和周期性
- 评估问题严重程度的变化
- 预测未来发作风险

**输出内容**：
- 问题发生频率曲线
- 严重程度变化趋势
- 诱发因素分析
- 预防建议

#### 痣的变化监测
- 新增痣的位置和数量追踪
- 已有痣的大小变化监测
- ABCDE特征变化记录
- 高风险痣识别

**输出内容**：
- 痣的分布图
- 变化预警报告
- 需要关注的美容痣列表
- 就医建议

#### 护肤效果评估
- 护肤程序使用频率分析
- 产品效果评估
- 皮肤状态改善情况
- 不良反应监测

**输出内容**：
- 护肤效果评分
- 产品推荐
- 程序优化建议
- 成本效益分析

#### 日晒防护效果分析
- 防晒霜使用情况统计
- 日晒伤发生频率
- 光老化迹象评估
- 防护习惯改进建议

**输出内容**：
- 防护评分趋势
- 风险评估
- 改进建议
- 产品推荐

### 2. 风险评估

#### 皮肤癌风险评估
基于以下因素进行综合评估：
- 皮肤类型（Fitzpatrick分型）
- 日晒暴露史
- 痣的数量和特征
- 日晒伤历史
- 家族史
- 使用日光浴床历史

**风险等级**：
- **低风险**：深色皮肤、少日晒、无痣异常
- **中风险**：浅色皮肤、中度日晒、有痣异常
- **高风险**：浅色皮肤、大量日晒、多个异常痣、家族史

**输出内容**：
- 风险等级（低/中/高）
- 主要风险因素
- 量化风险评分
- 降低风险策略
- 筛查建议

#### 痤疮严重程度评估
基于以下因素进行综合评估：
- 痤疮类型（黑头、白头、炎性丘疹、结节、囊肿）
- 病灶数量和分布
- 炎症程度
- 瘢痕形成风险

**严重程度分级**：
- **轻度**：主要是黑头和白头，少量炎性病灶
- **中度**：较多炎性病灶，可能形成轻微瘢痕
- **重度**：结节和囊肿，高瘢痕风险

**输出内容**：
- 严重程度分级
- 主要诱因分析
- 治疗建议参考
- 护肤建议
- 就医建议

#### 过敏风险识别
基于以下因素进行综合评估：
- 已知过敏原
- 皮肤敏感史
- 产品使用历史
- 季节性过敏模式
- 家族过敏史

**输出内容**：
- 过敏原列表
- 风险评估
- 避免建议
- 替代产品推荐

#### 光老化风险预测
基于以下因素进行综合评估：
- 日晒暴露总量
- 防护习惯
- 皮肤类型
- 年龄
- 生活方式

**输出内容**：
- 光老化风险等级
- 当前光老化迹象
- 预防建议
- 治疗选择参考

### 3. 关联分析

#### 与营养模块的关联
**营养素对皮肤健康的影响**：
- 维生素A：皮肤细胞更新、视力
- 维生素C：胶原蛋白合成、抗氧化
- 维生素E：抗氧化、保护细胞膜
- Omega-3脂肪酸：抗炎作用
- 锌：伤口愈合、油脂控制
- 水：皮肤水合作用

**食物对皮肤问题的影响**：
- 高糖食物：痤疮加重
- 乳制品：部分人群痤疮诱发因素
- 辛辣食物：玫瑰痤疮加重
- 酒精：皮肤脱水、潮红

**营养缺乏的皮肤表现**：
- 维生素A缺乏：皮肤干燥、角化
- 维生素C缺乏：伤口愈合慢、易淤青
- 维生素B缺乏：皮炎、口角炎
- 铁缺乏：苍白、脆弱
- 蛋白质缺乏：皮肤松弛、水肿

**输出内容**：
- 营养状况评估
- 缺乏风险识别
- 饮食调整建议
- 补充剂建议（如需要）

#### 与慢性病模块的关联
**糖尿病与皮肤**：
- 糖尿病皮肤病（糖尿病性皮肤病）
- 伤口愈合延迟
- 真菌感染风险增加
- 黑棘皮病
- 脂质性渐进性坏死

**自身免疫病与皮肤**：
- 狼疮：蝶形红斑、光敏感
- 类风湿关节炎：类风湿结节、血管炎
- 银屑病关节炎：银屑病皮损
- 皮肌炎：Gottron征、向阳性皮疹

**甲状腺疾病与皮肤**：
- 甲亢：皮肤湿润、头发变细、指甲松动
- 甲减：皮肤干燥、毛发粗燥、水肿

**肝脏疾病与皮肤**：
- 黄疸：皮肤和巩膜黄染
- 蜘蛛痣：血管性蜘蛛状病变
- 掌红斑：手掌红斑
- 皮肤瘙痒：胆汁淤积

**输出内容**：
- 皮肤症状与疾病关联分析
- 并发症风险评估
- 综合管理建议
- 专科转诊建议

#### 与用药模块的关联
**药物疹（药物过敏）**：
- 常见致敏药物：抗生素、抗癫痫药、NSAIDs
- 皮疹类型：麻疹样、荨麻疹、固定药疹
- 严重反应：Stevens-Johnson综合征

**光敏性药物**：
- 四环素类抗生素
- 噻嗪类利尿剂
- NSAIDs
- 某些抗精神病药

**药物引起的色素沉着**：
- 米诺环素：蓝色灰色色素沉着
- 胺碘酮：蓝灰色色素沉着
- 某些化疗药物

**药物引起的皮肤干燥**：
- 维A酸类
- 苯二氮卓类
- 抗组胺药（长期使用）

**输出内容**：
- 药物风险识别
- 相互作用分析
- 替代药物建议（需与医生讨论）
- 监测建议

#### 与内分泌模块的关联
**激素变化对皮肤的影响**：
- 青春期：雄激素增加，痤疮
- 妊娠期：色素沉着、妊娠纹、皮肤血管变化
- 更年期：雌激素下降，皮肤干燥、皱纹
- 月经周期：周期性痤疮加重

**多囊卵巢综合征（PCOS）**：
- 痤疮
- 多毛症
- 雄激素性脱发
- 黑棘皮病

**库欣综合征**：
- 月亮脸、水牛背
- 皮肤变薄、紫纹
- 痤疮、多毛

**输出内容**：
- 激素对皮肤的影响分析
- 周期性症状识别
- 管理建议
- 治疗时机建议

### 4. 个性化建议

#### 护肤程序优化
**根据皮肤类型定制**：
- 干性皮肤：加强保湿，避免过度清洁
- 油性皮肤：控油，保持清洁，水油平衡
- 混合性皮肤：分区护理，T区控油，U区保湿
- 中性皮肤：维持现状，基础护理
- 敏感性皮肤：温和产品，避免刺激

**根据主要问题定制**：
- 痤疮：清洁、控油、抗炎、避免致痘成分
- 色斑：防晒、美白成分、抗氧化
- 抗衰老：抗氧化、修复、防晒
- 敏感：舒缓、修复、屏障保护

**输出内容**：
- 早晨护肤程序建议
- 晚间护肤程序建议
- 每周护理建议
- 产品选择指导
- 预算范围建议

#### 生活方式调整
**饮食调整**：
- 低升糖指数饮食（痤疮）
- 抗炎饮食（湿疹、银屑病）
- 抗氧化食物（抗衰老）
- 充足水分摄入

**睡眠管理**：
- 保证7-9小时睡眠
- 规律作息时间
- 睡前护肤程序
- 枕头清洁（痤疮）

**压力管理**：
- 识别压力诱发的皮肤问题
- 学习放松技巧
- 规律运动
- 兴爱好

**环境调整**：
- 室内湿度控制（干燥皮肤）
- 避免过敏原（过敏肌肤）
- 工作环境防护（职业性皮肤问题）

**输出内容**：
- 个性化生活方式建议
- 目标设定
- 进度追踪方法
- 激励机制

#### 预防措施建议
**皮肤癌预防**：
- 每日防晒（SPF 30+）
- 避免日光浴床
- 定期皮肤检查
- 保护儿童免受日晒
- 早期发现异常痣

**痤疮预防**：
- 正确清洁皮肤
- 避免触摸面部
- 清洁手机和眼镜
- 更换枕套频率
- 非致痘性化妆品

**湿疹预防**：
- 保持皮肤保湿
- 避免已知诱因
- 使用温和洗涤剂
- 穿着棉质衣物
- 控制室内温度和湿度

**光老化预防**：
- 全年防晒
- 抗氧化护肤品
- 不吸烟
- 充足睡眠
- 健康饮食

**输出内容**：
- 针对性预防策略
- 优先级排序
- 实施步骤
- 效果评估方法

#### 产品选择建议
**成分知识**：
- 痤疮治疗：水杨酸、过氧化苯甲酰、维A酸
- 美白：维生素C、烟酰胺、熊果苷
- 抗衰老：视黄醇、肽类、透明质酸
- 保湿：透明质酸、甘油、神经酰胺
- 舒缓：芦荟、积雪草、燕麦

**产品选择原则**：
- 根据皮肤类型选择
- 避免已知过敏原
- 成分简单优于复杂
- 无香料配方更安全
- 先试用小包装

**阅读产品标签**：
- 识别致痘成分
- 识别过敏原
- 理解活性成分浓度
- 理解产品功效宣称

**输出内容**：
- 成分教育
- 产品推荐框架（非具体品牌）
- 避免成分列表
- 产品试用建议

### 5. 目标管理

#### 目标设定
- 与用户协商设定现实目标
- 分解为可实现的步骤
- 设定时间节点
- 建立评估标准

**常见目标类型**：
- 改善痤疮状况
- 建立规律护肤习惯
- 增加防晒使用频率
- 减少色斑
- 改善皮肤干燥
- 建立定期自查习惯

#### 进度追踪
- 定期评估目标达成情况
- 提供激励和反馈
- 调整目标（如需要）
- 庆祝里程碑达成
- 记录改进过程

#### 障碍识别
- 识别阻碍目标达成的因素
- 提供克服障碍的策略
- 调整计划以适应实际情况
- 提供持续支持
- 连接资源和支持网络

### 6. 统计分析

#### 综合健康评分
基于以下因素计算：
- 皮肤问题控制情况（30%）
- 护肤习惯（25%）
- 日晒防护（20%）
- 定期检查（15%）
- 目标达成（10%）

**评分范围**：0-100分
- **优秀**：90-100分
- **良好**：75-89分
- **一般**：60-74分
- **较差**：<60分

#### 皮肤健康年龄
- 基于皮肤状态、问题情况、防护习惯计算
- 与实际年龄对比
- 提供改善建议

#### 问题统计
- 问题类型分布
- 问题发生频率
- 问题持续时间
- 解决率统计
- 复发率分析

#### 护肤统计
- 护肤程序执行率
- 产品使用频率
- 护肤花费统计
- 产品更换频率
- 不良反应统计

### 7. 预警系统

#### 痣的变化预警
- 新增痣数量异常增加
- 已有痣快速增大
- ABCDE特征出现异常
- 颜色或形态改变
- 出现症状（瘙痒、出血）

**预警级别**：
- **黄色预警**：需要观察，下次检查时咨询医生
- **橙色预警**：需要尽快就医（1周内）
- **红色预警**：需要立即就医

#### 皮肤问题预警
- 痤疮突然恶化
- 新出现严重皮疹
- 药物反应迹象
- 感染征象（红肿热痛）
- 慢性病皮肤表现

#### 护肤预警
- 产品不良反应
- 护肤程序不当
- 过度护肤征象
- 过期产品使用
- 产品相互作用

#### 检查提醒
- 定期皮肤自查提醒（每月）
- 皮肤科检查提醒（每年）
- 痣监测提醒（每月）
- 防晒补涂提醒

#### Imported: 使用场景

### 场景1：定期健康评估
**用户请求**：分析最近6个月的皮肤健康状况

**分析流程**：
1. 读取最近6个月的所有皮肤健康记录
2. 分析问题记录、痣监测、护肤记录
3. 评估防护习惯变化
4. 计算健康评分变化
5. 识别改善或恶化的趋势
6. 生成综合评估报告

**输出内容**：
- 健康评分变化趋势
- 主要改善点
- 需要关注的问题
- 下一步行动建议

### 场景2：痣的监测评估
**用户请求**：我发现背部有个痣有些变化，帮我评估一下

**分析流程**：
1. 检索该痣的历史记录
2. 对比ABCDE特征变化
3. 评估风险等级
4. 检查是否有其他异常痣
5. 分析个人风险因素
6. 生成评估报告

**输出内容**：
- ABCDE评估结果
- 变化程度分析
- 风险等级
- 就医建议（强烈建议/建议/观察）
- 监测频率建议

### 场景3：痤疮管理规划
**用户请求**：我想改善痤疮问题，制定一个管理计划

**分析流程**：
1. 评估当前痤疮严重程度
2. 分析主要诱发因素
3. 评估当前护肤和饮食习惯
4. 识别需要改善的领域
5. 设定阶段性目标
6. 制定个性化计划

**输出内容**：
- 当前严重程度评估
- 主要诱因分析
- 护肤程序建议
- 饮食和生活方式建议
- 目标和时间表
- 何时就医建议

### 场景4：防晒改进计划
**用户请求**：我的防晒习惯不好，帮我制定改进计划

**分析流程**：
1. 评估当前防晒习惯
2. 分析日晒暴露模式
3. 评估皮肤类型和风险
4. 识别主要障碍
5. 设定可达成的目标
6. 制定渐进式改进计划

**输出内容**：
- 当前防晒评分
- 风险评估
- 改进目标
- 产品选择建议
- 使用习惯建立策略
- 进度追踪方法

### 场景5：多学科联合分析
**用户请求**：我有糖尿病，这对我的皮肤有什么影响？

**分析流程**：
1. 读取糖尿病管理数据
2. 分析血糖控制情况
3. 评估皮肤并发症风险
4. 识别潜在的糖尿病皮肤问题
5. 分析两者关联性
6. 生成联合管理建议

**输出内容**：
- 糖尿病对皮肤的影响
- 常见糖尿病皮肤问题
- 并发症风险评估
- 联合管理策略
- 监测指标建议
- 何时就医

### 场景6：抗衰老规划
**用户请求**：我想预防皮肤老化，从现在开始应该注意什么？

**分析流程**：
1. 评估当前皮肤状态
2. 分析生活方式和习惯
3. 评估光老化风险
4. 识别可改变的风险因素
5. 制定预防策略
6. 建立监测指标

**输出内容**：
- 当前皮肤年龄评估
- 主要老化风险因素
- 预防策略（防晒、护肤、生活方式）
- 护肤程序建议
- 定期评估建议
- 投资回报分析

#### Imported: 数据分析方法

### 定量分析
- 统计描述（均值、中位数、标准差）
- 趋势分析（线性回归、移动平均）
- 相关性分析（Pearson/Spearman相关）
- 风险评分计算（多因素加权）
- 时间序列分析

### 定性分析
- 文本描述分析
- 症状模式识别
- 主诉内容分类
- 满意度评估
- 图片分析（如可用）

### ABCDE评估算法
- 不对称性评分（0-2分）
- 边缘规则性评分（0-2分）
- 颜色均匀性评分（0-2分）
- 直径评分（0-2分）
- 变化评分（0-2分）
- 总分≥4分：建议就医

### 可视化输出
- 时间序列图表
- 身体部位分布图
- 痣的位置地图
- 风险评估雷达图
- 进度追踪仪表板
- 对比分析柱状图

#### Imported: 质量保证

### 数据验证
- 检查数据完整性
- 验证数据一致性
- 识别异常值
- 处理缺失数据
- 交叉验证不同来源数据

### 结果验证
- 医学逻辑检查
- 与临床指南对照
- 专家审查（如有）
- 用户反馈收集
- 定期更新算法

### 持续改进
- 定期更新分析算法
- 引入新的科学证据
- 优化用户体验
- 扩展功能范围
- 提高准确性

#### Imported: 参考资源

### 临床指南
- 美国皮肤病学会（AAD）指南
- 欧洲皮肤病学会（EADV）指南
- 中华皮肤科分会临床指南
- 皮肤癌基金会（SCF）指南

### 评估工具
- ABCDE法则（黑色素瘤筛查）
- Glasgow七点清单（黑色素瘤评估）
- 痤疮严重程度评分系统
- 湿疹面积和严重程度指数（EASI）
- 皮肤病生活质量指数（DLQI）

### 数据源
- 用户记录数据
- 营养模块数据
- 慢性病模块数据
- 用药模块数据
- 内分泌模块数据
- 环境数据（紫外线指数）

#### Imported: 局限性

### 系统局限
- 不能替代专业皮肤科检查
- 不能进行皮肤镜检查
- 不能进行病理检查
- 分析结果受数据质量影响
- 不能进行生物活检

### 数据局限
- 依赖用户记录准确性
- 可能存在遗漏记录
- 主观评估存在偏差
- 时间跨度可能不足
- 照片质量影响评估

### 建议局限
- 不能考虑所有个体因素
- 不能预测所有并发症
- 需要结合临床判断
- 不能保证100%准确性
- 产品建议可能存在个体差异

#### Imported: 未来扩展

### 计划功能
- AI图像识别（痣和皮肤病变分析）
- 语音记录录入
- 智能提醒系统
- 与皮肤科医生系统对接
- 远程皮肤病学支持

### 研究方向
- 机器学习预测模型
- 个性化预防策略
- 基因风险分析
- 皮肤微生物组分析
- 环境因素影响分析

---

**版本**: v1.0.0
**最后更新**: 2025-01-06
**维护者**: WellAlly Tech

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

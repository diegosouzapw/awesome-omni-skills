---
name: oral-health-analyzer-v2
description: "\u53e3\u8154\u5065\u5eb7\u5206\u6790\u6280\u80fd workflow skill. Use this skill when the user needs \u5206\u6790\u53e3\u8154\u5065\u5eb7\u6570\u636e\u3001\u8bc6\u522b\u53e3\u8154\u95ee\u9898\u6a21\u5f0f\u3001\u8bc4\u4f30\u53e3\u8154\u5065\u5eb7\u72b6\u51b5\u3001\u63d0\u4f9b\u4e2a\u6027\u5316\u53e3\u8154\u5065\u5eb7\u5efa\u8bae\u3002\u652f\u6301\u4e0e\u8425\u517b\u3001\u6162\u6027\u75c5\u3001\u7528\u836f\u7b49\u5176\u4ed6\u5065\u5eb7\u6570\u636e\u7684\u5173\u8054\u5206\u6790\u3002 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: uncategorized
tags: ["oral-health-analyzer-v2", "oral-health-analyzer", "uncategorized"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# 口腔健康分析技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/oral-health-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

name: oral-health-analyzer # 口腔健康分析技能

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 技能概述, 医学免责声明, 核心功能, 使用场景, 数据分析方法, 质量保证.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 需要分析口腔健康趋势、龋齿风险、牙周问题或卫生习惯时使用。
- 任务涉及口腔健康评分、问题模式识别或个性化口腔护理建议。
- 用户请求口腔健康报告或长期口腔记录分析时使用。
- Use when the request clearly matches the imported source intent: 分析口腔健康数据、识别口腔问题模式、评估口腔健康状况、提供个性化口腔健康建议。支持与营养、慢性病、用药等其他健康数据的关联分析。.
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

#### Imported: 技能概述

本技能提供全面的口腔健康数据分析功能，包括趋势识别、风险评估、问题诊断和个性化建议生成。

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @oral-health-analyzer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @oral-health-analyzer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @oral-health-analyzer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @oral-health-analyzer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/oral-health-analyzer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@odoo-hr-payroll-setup-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-inventory-optimizer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-l10n-compliance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-manufacturing-advisor-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- 所有口腔问题应由专业牙科医生诊断和治疗
- 分析结果不能替代专业口腔检查
- 紧急情况应立即就医
- 请遵循牙科医生的专业建议

#### Imported: 核心功能

### 1. 趋势分析

#### 龋齿发展趋势
- 识别龋齿发生的模式和频率
- 分析龋齿在不同牙位的分布
- 评估龋齿发展速度
- 预测未来龋齿风险

**输出内容**：
- 龋齿数量变化曲线
- 高风险牙位识别
- 发展趋势预测
- 预防建议

#### 牙周健康变化
- 牙周出血频率统计
- 牙周袋深度变化
- 附着丧失监测
- 牙龈退缩进展

**输出内容**：
- 牙周健康评分趋势
- 疾病进展预警
- 治疗效果评估
- 维护建议

#### 卫生习惯改善
- 刷牙频率变化
- 牙线使用频率变化
- 洁牙记录追踪
- 卫生习惯评分

**输出内容**：
- 习惯改善曲线
- 评分变化趋势
- 目标达成情况
- 激励建议

### 2. 风险评估

#### 龋齿风险评估
基于以下因素进行综合评估：
- 饮食习惯（糖分摄入）
- 口腔卫生习惯
- 氟化物使用
- 唾液分泌情况
- 既往龋齿史
- 家族史

**风险等级**：
- **低风险**：良好的卫生习惯+低糖饮食+定期检查
- **中风险**：中等糖摄入+一般卫生习惯
- **高风险**：高糖饮食+差卫生习惯+不定期检查+龋齿史

**输出内容**：
- 风险等级（低/中/高）
- 主要风险因素
- 量化风险评分
- 降低风险建议

#### 牙周病风险评估
基于以下因素进行综合评估：
- 牙龈出血频率
- 牙周袋深度
- 附着丧失程度
- 吸烟状况
- 糖尿病控制情况
- 压力水平
- 家族史

**风险等级**：
- **健康**：无出血，探诊深度1-3mm
- **牙龈炎**：探诊出血，探诊深度3-4mm
- **轻度牙周炎**：探诊深度4-5mm，轻度附着丧失
- **中度牙周炎**：探诊深度5-6mm，中度附着丧失
- **重度牙周炎**：探诊深度>6mm，重度附着丧失

**输出内容**：
- 疾病分期
- 风险因素列表
- 进展风险预测
- 管理建议

#### 口腔癌风险评估
基于以下因素进行综合评估：
- 吸烟史
- 饮酒习惯
- 槟榔咀嚼
- HPV感染
- 日晒暴露（唇癌）
- 营养状况
- 口腔卫生

**风险等级**：
- **低风险**：无危险因素
- **中风险**：1-2个危险因素
- **高风险**：3个以上危险因素或既往病变

**输出内容**：
- 风险等级
- 主要危险因素
- 筛查建议
- 预防策略

### 3. 关联分析

#### 与营养模块的关联
**糖分摄入与龋齿风险**：
- 分析每日糖分摄入量
- 评估进食频率对龋齿的影响
- 识别高糖食物类型
- 推荐低糖替代食物

**钙和维生素D与牙齿健康**：
- 评估钙摄入量是否充足
- 分析维生素D水平
- 评估对牙齿强度的影响
- 推荐补充剂（如需要）

**营养缺乏的口腔表现**：
- 维生素C缺乏：牙龈出血
- 维生素B缺乏：口腔溃疡
- 铁缺乏：舌头炎症
- 蛋白质缺乏：黏膜萎缩

#### 与慢性病模块的关联
**糖尿病与牙周病**：
- 分析血糖控制与牙周健康的关系
- 评估糖尿病并发症风险
- 提供牙周病对血糖影响的说明
- 联合管理建议

**心血管疾病与牙周病**：
- 分析牙周炎对心血管疾病的影响
- 评估炎症指标关联
- 提供预防性治疗建议
- 联合监测建议

**妊娠期口腔健康**：
- 妊娠期牙龈炎风险评估
- 牙齿治疗时机建议
- 药物使用安全性评估
- 孕期口腔护理指导

**骨质疏松与牙齿健康**：
- 评估骨密度对牙齿的影响
- 分析抗骨吸收药物的副作用
- 提供牙齿保护建议

#### 与用药模块的关联
**药物引起的口干**：
- 识别导致口干的药物
- 评估口干严重程度
- 提供缓解建议
- 与医生沟通用药调整

**药物引起的牙龈增生**：
- 识别导致牙龈增生的药物
- 评估增生程度
- 提供管理建议
- 与医生沟通替代用药

**药物对牙齿颜色的影响**：
- 识别导致牙齿变色的药物
- 提供美容解决方案
- 预防措施建议

#### 与眼健康模块的关联
**干燥综合征**：
- 口干与眼干的联合分析
- 评估全身性自身免疫病
- 多系统症状追踪
- 专科转诊建议

**自身免疫病的口腔表现**：
- 狼疮的口腔病变
- 类风湿关节炎的颞下颌关节影响
- 其他免疫病的口腔表现

### 4. 个性化建议

#### 预防建议
**龋齿预防**：
- 刷牙技巧指导（巴氏刷牙法）
- 牙线使用方法
- 含氟产品推荐
- 饮食调整建议
- 定期检查提醒

**牙周病预防**：
- 改善口腔卫生习惯
- 戒烟支持
- 压力管理
- 血糖控制（糖尿病患者）
- 定期洁牙建议

**口腔癌预防**：
- 戒烟限酒
- 避免槟榔
- 防晒（唇部）
- 营养均衡
- 定期自查方法

#### 治疗建议
**根据问题类型提供**：
- 常规检查建议（每6个月）
- 紧急情况处理指导
- 专科转诊建议（如需要）
- 治疗时机建议
- 费用预估参考

#### 生活方式建议
**饮食调整**：
- 减少游离糖摄入
- 增加钙和维生素D摄入
- 多喝水（预防口干）
- 避免过硬食物（保护牙冠）

**习惯改善**：
- 制定个性化刷牙计划
- 逐步增加牙线使用频率
- 建立口腔卫生常规
- 设置提醒系统

**风险因素管理**：
- 戒烟策略
- 限酒建议
- 压力管理技巧
- 夜磨牙管理

### 5. 目标管理

#### 目标设定
- 与用户协商设定现实目标
- 分解为可实现的步骤
- 设定时间节点
- 建立评估标准

**常见目标类型**：
- 提高牙线使用频率
- 改善刷牙技巧
- 减少糖分摄入
- 定期口腔检查
- 戒烟

#### 进度追踪
- 定期评估目标达成情况
- 提供激励和反馈
- 调整目标（如需要）
- 庆祝里程碑达成

#### 障碍识别
- 识别阻碍目标达成的因素
- 提供克服障碍的策略
- 调整计划以适应实际情况
- 提供持续支持

### 6. 统计分析

#### 综合健康评分
基于以下因素计算：
- 口腔卫生习惯（40%）
- 检查频率（20%）
- 治疗完成情况（20%）
- 问题控制情况（10%）
- 目标达成情况（10%）

**评分范围**：0-100分
- **优秀**：90-100分
- **良好**：75-89分
- **一般**：60-74分
- **较差**：<60分

#### 口腔健康年龄
- 基于牙齿状态、牙周健康、卫生习惯计算
- 与实际年龄对比
- 提供改善建议

#### 治疗统计
- 治疗类型分布
- 治疗费用统计
- 治疗频率分析
- 牙医就诊记录

#### 问题统计
- 问题类型分布
- 问题发生频率
- 问题持续时间
- 解决率统计

### 7. 预警系统

#### 定期检查提醒
- 距离下次检查30天：温馨提醒
- 距离下次检查7天：紧急提醒
- 超过检查时间：逾期提醒

#### 问题预警
- 牙痛超过3天：建议就医
- 牙龈出血持续1周：建议检查
- 口腔溃疡超过2周：建议活检
- 新增肿块/白斑：立即就医

#### 趋势预警
- 龋齿数量快速增加：风险升级
- 牙周指标恶化：转诊牙周专科
- 卫生习惯下降：干预建议
- 治疗频率增加：深度评估

#### Imported: 使用场景

### 场景1：定期健康评估
**用户请求**：分析最近6个月的口腔健康状况

**分析流程**：
1. 读取最近6个月的所有口腔健康记录
2. 分析检查记录、治疗记录、问题记录
3. 评估卫生习惯变化
4. 计算健康评分变化
5. 识别改善或恶化的趋势
6. 生成综合评估报告

**输出内容**：
- 健康评分变化趋势
- 主要改善点
- 需要关注的问题
- 下一步行动建议

### 场景2：问题诊断辅助
**用户请求**：我最近刷牙时牙龈出血，持续1周了

**分析流程**：
1. 检索最近的口腔检查记录
2. 分析牙周状况历史
3. 评估当前卫生习惯
4. 检查是否有相关用药记录
5. 分析营养数据（如维生素C摄入）
6. 生成诊断辅助报告

**输出内容**：
- 可能的原因分析
- 严重程度评估
- 就医建议
- 家庭护理方法
- 预防措施

### 场景3：治疗规划
**用户请求**：我想改善口腔卫生，降低龋齿风险

**分析流程**：
1. 评估当前龋齿风险
2. 分析主要风险因素
3. 评估当前卫生习惯
4. 识别需要改善的领域
5. 设定阶段性目标
6. 制定个性化计划

**输出内容**：
- 当前风险评估
- 改善目标
- 行动计划
- 时间表
- 进度追踪方法

### 场景4：多学科联合分析
**用户请求**：我有糖尿病，这对我的口腔健康有什么影响？

**分析流程**：
1. 读取糖尿病管理数据
2. 分析血糖控制情况
3. 评估牙周健康状况
4. 分析两者关联性
5. 评估并发症风险
6. 生成联合管理建议

**输出内容**：
- 糖尿病对口腔的影响
- 口腔健康对血糖的影响
- 并发症风险评估
- 联合管理策略
- 监测指标建议

### 场景5：预防性指导
**用户请求**：我准备怀孕，应该注意哪些口腔问题？

**分析流程**：
1. 评估当前口腔健康状况
2. 识别潜在风险
3. 分析当前用药安全性
4. 评估治疗紧迫性
5. 生成孕期口腔管理计划

**输出内容**：
- 孕前口腔检查建议
- 孕期常见口腔问题
- 药物使用安全性
- 治疗时机建议
- 孕期护理指导

#### Imported: 数据分析方法

### 定量分析
- 统计描述（均值、中位数、标准差）
- 趋势分析（线性回归、移动平均）
- 相关性分析（Pearson/Spearman相关）
- 风险评分计算（多因素加权）

### 定性分析
- 文本描述分析
- 症状模式识别
- 主诉内容分类
- 满意度评估

### 可视化输出
- 时间序列图表
- 牙位分布图
- 风险评估雷达图
- 进度追踪仪表板
- 对比分析柱状图

#### Imported: 质量保证

### 数据验证
- 检查数据完整性
- 验证数据一致性
- 识别异常值
- 处理缺失数据

### 结果验证
- 医学逻辑检查
- 与临床指南对照
- 专家审查（如有）
- 用户反馈收集

### 持续改进
- 定期更新分析算法
- 引入新的科学证据
- 优化用户体验
- 扩展功能范围

#### Imported: 参考资源

### 临床指南
- 美国牙科协会（ADA）指南
- 世界卫生组织（WHO）口腔健康指南
- 中华口腔医学会临床指南
- Cochrane口腔健康组系统评价

### 评估工具
- DMFT指数（龋失补指数）
- CPI指数（社区牙周指数）
- 口腔健康影响.profile（OHIP-14）
- 龋齿风险评估工具（CAT）

### 数据源
- 用户记录数据
- 营养模块数据
- 慢性病模块数据
- 用药模块数据
- 眼健康模块数据

#### Imported: 局限性

### 系统局限
- 不能替代专业口腔检查
- 不能进行影像学检查
- 不能进行实验室检测
- 分析结果受数据质量影响

### 数据局限
- 依赖用户记录准确性
- 可能存在遗漏记录
- 主观评估存在偏差
- 时间跨度可能不足

### 建议局限
- 不能考虑所有个体因素
- 不能预测所有并发症
- 需要结合临床判断
- 不能保证100%准确性

#### Imported: 未来扩展

### 计划功能
- AI影像识别（牙片分析）
- 语音记录录入
- 智能提醒系统
- 社区支持功能
- 与牙医系统对接

### 研究方向
- 机器学习预测模型
- 个性化预防策略
- 基因风险分析
- 微生物组分析

---
name: oral-health-analyzer

**版本**: v1.0.0
**最后更新**: 2025-01-06
**维护者**: WellAlly Tech

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

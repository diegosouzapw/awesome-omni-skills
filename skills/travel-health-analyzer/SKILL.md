---
name: travel-health-analyzer
description: "\u65c5\u884c\u5065\u5eb7\u5206\u6790\u6280\u80fd workflow skill. Use this skill when the user needs \u5206\u6790\u65c5\u884c\u5065\u5eb7\u6570\u636e\u3001\u8bc4\u4f30\u76ee\u7684\u5730\u5065\u5eb7\u98ce\u9669\u3001\u63d0\u4f9b\u75ab\u82d7\u63a5\u79cd\u5efa\u8bae\u3001\u751f\u6210\u591a\u8bed\u8a00\u7d27\u6025\u533b\u7597\u4fe1\u606f\u5361\u7247\u3002\u652f\u6301WHO/CDC\u6570\u636e\u96c6\u6210\u7684\u4e13\u4e1a\u7ea7\u65c5\u884c\u5065\u5eb7\u98ce\u9669\u8bc4\u4f30\u3002 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["travel-health-analyzer", "who", "cdc", "development"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# 旅行健康分析技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/travel-health-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# 旅行健康分析技能

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 🚨 重要医学免责声明, 技能功能, 目的地健康风险评估: Thailand, 用药相互作用检查结果, 旅行前健康检查报告, 数据文件操作.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 需要做旅行前健康准备、目的地健康风险评估或疫苗建议时使用。
- 任务涉及 WHO/CDC 风险信息、旅行药箱、预防措施或多语言医疗卡片。
- 用户请求旅行健康规划或目的地卫生风险分析时使用。
- Use when the request clearly matches the imported source intent: 分析旅行健康数据、评估目的地健康风险、提供疫苗接种建议、生成多语言紧急医疗信息卡片。支持WHO/CDC数据集成的专业级旅行健康风险评估。.
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

#### Imported: 🚨 重要医学免责声明

**本技能提供的所有健康建议和信息仅供参考,不能替代专业医疗建议。**

- ⚠️ **所有建议必须由专业医生审核**
- ⚠️ **疫苗接种和用药方案必须由医生制定**
- ⚠️ **不提供具体的医疗处方或诊断**
- ⚠️ **健康风险数据来源于WHO/CDC,可能存在滞后性**
- ⚠️ **紧急情况下请立即就医**

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @travel-health-analyzer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @travel-health-analyzer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @travel-health-analyzer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @travel-health-analyzer using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/travel-health-analyzer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@supply-chain-risk-auditor` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sveltekit` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swift-concurrency-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swiftui-expert-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 技能功能

### 1. 旅行健康规划分析

分析用户的旅行计划,提供全面的健康准备建议。

**输入**: 旅行目的地、日期、旅行目的
**输出**:
- 目的地健康风险评估
- 必要和推荐的疫苗接种清单
- 旅行药箱建议清单
- 预防措施建议
- 旅行前准备时间表

**分析要点**:
- 识别目的地传染病风险
- 评估食物和饮水安全
- 确认环境风险(高温、高原等)
- 检查当前疫情爆发信息
- 提供WHO/CDC参考链接

---

### 2. 目的地健康风险评估

基于WHO/CDC数据,对旅行目的地进行专业级健康风险评估。

**数据源**:
- 世界卫生组织(WHO)国际旅行健康
- 美国疾控中心(CDC)旅行健康
- 当地卫生部门官方数据

**评估维度**:
- 传染病风险(登革热、疟疾、霍乱、甲肝等)
- 食物和饮水安全
- 环境风险(高温、高原、空气污染)
- 季节性风险
- 当前疫情爆发警报

**风险等级**:
- 🟢 **低风险** - 常规预防措施
- 🟡 **中等风险** - 需要特别注意
- 🔴 **高风险** - 需要采取严格预防措施
- ⚫ **极高风险** - 建议推迟旅行或采取特殊防护

**输出格式**:
```markdown

#### Imported: 目的地健康风险评估: Thailand

### 传染病风险
#### 🔴 登革热 - 高风险
- **传播方式**: 蚊子叮咬
- **季节性**: 全年
- **症状**: 高热、头痛、肌肉关节痛、皮疹
- **预防**: 使用防蚊液、穿长袖衣物、住宿选择有空调房间
- **数据源**: [WHO](https://www.who.int/ith) | [CDC](https://www.cdc.gov/dengue)

### 食物饮水安全
#### 🟡 中等风险
- 饮用瓶装水或煮沸的水
- 避免冰块
- 避免生食
- 水果自己剥皮

### 当前疫情警报
暂无重大疫情爆发警报
```

---

### 3. 疫苗接种需求分析

根据目的地和旅行计划,分析疫苗接种需求。

**分析内容**:
- 必需疫苗接种(如黄热病)
- 推荐疫苗接种(如甲肝、伤寒)
- 疫苗接种时间规划
- 疫苗相互作用检查
- 接种禁忌症评估

**疫苗清单模板**:
```json
{
  "vaccine": "甲肝疫苗",
  "status": "completed|planned|not_required|contraindicated",
  "date": "2025-06-15",
  "booster_required": false,
  "notes": "已完成接种,提供长期保护"
}
```

**时间规划原则**:
- 出发前4-6周:完成必需疫苗接种
- 出发前2-4周:完成推荐疫苗接种
- 某些疫苗需要多次接种,需提前规划

---

### 4. 旅行药箱智能建议

根据目的地健康风险和个人健康状况,生成个性化旅行药箱清单。

**药箱分类**:

#### 处方药
- 个人慢性病用药(足量+额外)
- 疟疾预防用药(如需要)
- 其他医生开具的旅行用药

#### 非处方药
- 止泻药(洛哌丁胺)
- 口服补液盐
- 退烧止痛药(对乙酰氨基酚/布洛芬)
- 抗过敏药(氯雷他定)
- 晕车药
- 抗酸药

#### 防护用品
- 防蚊液(DEET 20-30%)
- 防晒霜(SPF 50+)
- 口罩(N95)

#### 急救用品
- 创可贴
- 消毒液
- 纱布和绷带
- 体温计
- 小剪刀和镊子

**个性化建议**:
- 根据个人疾病史调整用药
- 根据目的地风险增减物品
- 考虑旅行时长和活动类型

---

### 5. 用药相互作用检查

检查旅行用药与个人慢性病用药之间的潜在相互作用。

**检查内容**:
- 疟疾预防用药 vs 慢性病用药
- 旅行期间临时用药 vs 常规用药
- 疫苗 vs 药物相互作用
- 食物 vs 药物相互作用

**常见相互作用**:
- 多西环素 vs 抗酸药、钙铁补充剂
- 甲氟喹 vs 某些心脏病药物
- 某些抗生素 vs 口服避孕药

**输出**:
```markdown

#### Imported: 用药相互作用检查结果

### ⚠️ 发现潜在相互作用

**多西环素 ↔ 抗酸药**
- **影响**: 抗酸药降低多西环素吸收
- **建议**: 间隔2小时服用
- **严重程度**: 中等

### ✅ 无相互作用
- 氨氯地平 vs 旅行用药无已知相互作用
```

---

### 6. 多语言紧急信息卡片生成

生成包含关键医疗信息的多语言紧急卡片。

**支持语言**:
- 英语 (en)
- 中文 (zh)
- 日语 (ja)
- 韩语 (ko)
- 法语 (fr)
- 西班牙语 (es)
- 泰语 (th)
- 越南语 (vi)

**卡片内容**:
```markdown
---
紧急医疗信息 | EMERGENCY MEDICAL INFORMATION
---

姓名: 张三 | Name: Zhang San
血型: A+ | Blood Type: A+
出生日期: 1990-01-01 | DOB: 1990-01-01

⚠️ 过敏史 | ALLERGIES
- 青霉素 (严重: 皮疹、呼吸困难) | Penicillin (Severe: Rash, Difficulty breathing)

当前用药 | CURRENT MEDICATIONS
- 氨氯地平 5mg 每日一次 (控制血压) | Amlodipine 5mg Once daily (Blood pressure)

疾病史 | MEDICAL CONDITIONS
- 高血压 (控制中) | Hypertension (Controlled)

紧急联系人 | EMERGENCY CONTACT
- 配偶: 李四 +86-138-1234-5678 | Spouse: Li Si +86-138-1234-5678
- 医生: 王医生 +86-10-8765-4321 | Doctor: Dr. Wang +86-10-8765-4321

---
[二维码: 扫描查看完整医疗记录]
[QR Code: Scan for complete medical records]
---
```

**二维码功能**:
- 编码关键医疗信息摘要
- 云端访问链接(模拟)
- 支持离线访问
- 可分享给医护人员

---

### 7. 旅行前后健康检查

#### 旅行前健康检查

**检查内容**:
- 个人健康状况评估
- 慢性病病情确认
- 用药充足性检查
- 疫苗接种确认
- 健康建议

**输出**:
```markdown

#### Imported: 旅行前健康检查报告

### 整体评估: ✅ 适合旅行

### 健康状况
- 血压: 控制良好
- 慢性病: 稳定
- 用药: 充足

### 准备完成度
- ✅ 疫苗接种: 已完成
- ✅ 旅行药箱: 已准备
- ✅ 保险: 已购买
- ⚠️ 紧急卡片: 待生成

### 建议
1. 生成多语言紧急卡片
2. 携带足量慢性病用药
3. 旅行期间注意血压监测
```

#### 旅行后健康监测

**监测内容**:
- 发热监测(持续2-4周)
- 消化系统症状
- 皮肤异常
- 其他不适症状

**潜伏期疾病提醒**:
- 疟疾: 可在返回后数月内发病
- 登革热: 通常3-14天
- 伤寒: 1-3周
- 甲肝: 2-6周

---

#### Imported: 数据文件操作

### 读取数据
```bash
# 读取旅行健康数据
Read: data/travel-health-tracker.json

# 读取示例数据
Read: data-example/travel-health-tracker.json
```

### 写入数据
```bash
# 更新旅行计划
Write: data/travel-health-tracker.json

# 保存健康检查日志
Write: data/travel-health-logs/pre-trip-assessment-YYYY-MM-DD.json
```

### 数据结构验证
- 验证必需字段存在
- 验证日期格式正确
- 验证枚举值有效
- 验证数据完整性

---

#### Imported: WHO/CDC数据集成

### 静态数据库(当前实现)

内置常见旅行目的地健康风险数据:
- 东南亚: 登革热、甲肝、伤寒、疟疾
- 非洲: 疟疾、黄热病、霍乱、脑膜炎
- 南美: 登革热、黄热病、寨卡病毒
- 中东: 中东呼吸综合征(MERS)

**数据更新**: 手动更新,建议每季度更新一次

### 动态查询(未来扩展)

计划集成:
- WHO疫情新闻RSS订阅
- CDC Travel Health API
- 当地卫生部门疫情通报

---

#### Imported: 输出格式

### 报告格式
- Markdown格式,便于阅读
- 结构化,便于程序处理
- 包含数据源引用
- 包含时间戳

### 日志格式
```json
{
  "log_id": "log_20250728_pretrip",
  "log_type": "pre_trip_assessment",
  "trip_id": "trip_20250801_seasia",
  "generated_at": "2025-07-28T10:00:00.000Z",
  "assessment_results": {
    "health_status": "suitable_for_travel",
    "vaccination_status": "completed",
    "risk_assessment": {...},
    "recommendations": [...]
  }
}
```

---

#### Imported: 安全和隐私

### 数据保护
- 护照号码加密存储
- 二维码不包含完整敏感信息
- 支持数据导出和删除

### 医学安全
- 所有建议包含免责声明
- 强调医生咨询的必要性
- 不提供具体处方
- 引用权威数据源

---

#### Imported: 使用示例

### 分析旅行计划
```
输入: "计划2025年8月去东南亚旅游14天"

输出:
1. 目的地健康风险评估
2. 疫苗接种建议
3. 旅行药箱清单
4. 预防措施
5. 时间表
```

### 生成紧急卡片
```
输入: "生成英中日泰四语紧急卡片"

输出:
1. 多语言卡片文本
2. 二维码(描述)
3. 保存建议
```

### 评估健康风险
```
输入: "评估泰国的健康风险"

输出:
1. 传染病风险清单
2. 食物饮水安全建议
3. 环境风险
4. 当前疫情警报
5. WHO/CDC参考链接
```

---

**版本**: v1.0.0
**最后更新**: 2025-01-08
**维护者**: WellAlly Tech

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

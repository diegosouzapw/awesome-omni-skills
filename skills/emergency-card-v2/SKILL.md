---
name: emergency-card-v2
description: "\u7d27\u6025\u533b\u7597\u4fe1\u606f\u5361\u751f\u6210\u5668 workflow skill. Use this skill when the user needs \u751f\u6210\u7d27\u6025\u60c5\u51b5\u4e0b\u5feb\u901f\u8bbf\u95ee\u7684\u533b\u7597\u4fe1\u606f\u6458\u8981\u5361\u7247\u3002\u5f53\u7528\u6237\u9700\u8981\u65c5\u884c\u3001\u5c31\u8bca\u51c6\u5907\u3001\u7d27\u6025\u60c5\u51b5\u6216\u8be2\u95ee\"\u7d27\u6025\u4fe1\u606f\"\u3001\"\u533b\u7597\u5361\u7247\"\u3001\"\u6025\u6551\u4fe1\u606f\"\u65f6\u4f7f\u7528\u6b64\u6280\u80fd\u3002\u63d0\u53d6\u5173\u952e\u4fe1\u606f\uff08\u8fc7\u654f\u3001\u7528\u836f\u3001\u6025\u75c7\u3001\u690d\u5165\u7269\uff09\uff0c\u652f\u6301\u591a\u683c\u5f0f\u8f93\u51fa\uff08JSON\u3001\u6587\u672c\u3001\u4e8c\u7ef4\u7801\uff09\uff0c\u7528\u4e8e\u6025\u6551\u6216\u5feb\u901f\u5c31\u533b\u3002 and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["emergency-card-v2", "emergency-card", "json", "frontend", "agents", "assets", "examples", "references"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# 紧急医疗信息卡生成器

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/emergency-card` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# 紧急医疗信息卡生成器 生成紧急情况下快速访问的医疗信息摘要，用于急救或就医。

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 核心功能, 使用说明, 数据源, 安全性原则, 错误处理, 示例输出.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when tackling tasks related to its primary domain or functionality as described above.
- Use when the request clearly matches the imported source intent: 生成紧急情况下快速访问的医疗信息摘要卡片。当用户需要旅行、就诊准备、紧急情况或询问"紧急信息"、"医疗卡片"、"急救信息"时使用此技能。提取关键信息（过敏、用药、急症、植入物），支持多格式输出（JSON、文本、二维码），用于急救或快速就医。.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

### 1. 紧急信息提取
从用户的健康数据中提取最关键的信息：
- **严重过敏**：优先提取4级（过敏性休克）和3级过敏
- **当前用药**：活跃药物的名称、剂量、频率
- **急症情况**：需要紧急处理的医疗状况
- **植入物**：心脏起搏器、支架等（影响检查和治疗）
- **紧急联系人**：快速联系的家属信息

### 2. 信息优先级排序
按照医疗紧急程度对信息排序：
1. **P0 - 危急信息**：过敏性休克、严重药物过敏、危及生命的疾病
2. **P1 - 重要信息**：当前用药、慢性病、植入物
3. **P2 - 一般信息**：血型、年龄、体重、最近检查

### 3. 多格式输出
支持多种输出格式以适应不同场景：
- **HTML格式**：可打印网页，使用Tailwind CSS和Lucide图标（推荐）
- **JSON格式**：结构化数据，便于系统集成
- **文本格式**：简洁可读，适合打印携带
- **PDF格式**：专业打印，适合长期保存

#### HTML格式（新增）
生成独立的HTML文件，包含：
- Tailwind CSS样式（通过CDN）
- Lucide图标（通过CDN）
- 响应式设计
- 打印优化
- 多种尺寸变体（A4、钱包卡、大字版）
- 自动卡片类型检测（标准、儿童、老年、严重过敏）

使用方式：
```bash
# 生成标准卡片
python scripts/generate_emergency_card.py

# 指定卡片类型
python scripts/generate_emergency_card.py standard
python scripts/generate_emergency_card.py child
python scripts/generate_emergency_card.py elderly
python scripts/generate_emergency_card.py severe

# 指定打印尺寸
python scripts/generate_emergency_card.py standard a4       # A4标准
python scripts/generate_emergency_card.py standard wallet   # 钱包卡
python scripts/generate_emergency_card.py standard large    # 大字版（老年）
```

输出文件：`emergency-cards/emergency-card-{variant}-{YYYY-MM-DD}.html`

### 4. 离线可用
- 支持手机保存（相册、文件）
- 支持打印携带（钱包、包）
- 支持云端备份（可选）

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @emergency-card-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/emergency-card-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/emergency-card-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @emergency-card-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/emergency-card`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: 使用说明

### 触发条件
当用户提到以下场景时，使用此技能：
- ✅ "生成紧急医疗信息卡"
- ✅ "我需要旅行，如何快速提供医疗信息"
- ✅ "把我的过敏信息整理成卡片"
- ✅ "紧急情况急救信息"
- ✅ "就医准备资料"
- ✅ "医疗信息摘要"

### 执行步骤

#### 步骤 1: 读取用户基础数据
从以下数据源读取信息：

```javascript
// 1. 用户档案
const profile = readFile('data/profile.json');

// 2. 过敏史
const allergies = readFile('data/allergies.json');

// 3. 当前用药
const medications = readFile('data/medications/medications.json');

// 4. 辐射记录
const radiation = readFile('data/radiation-records.json');

// 5. 手术记录（查找植入物）
const surgeries = glob('data/手术记录/**/*.json');

// 6. 出院小结（查找急症）
const dischargeSummaries = glob('data/出院小结/**/*.json');
```

#### 步骤 2: 提取关键信息

##### 2.1 基础信息
```javascript
const basicInfo = {
  name: profile.basic_info?.name || "未设置",
  age: calculateAge(profile.basic_info?.birth_date),
  gender: profile.basic_info?.gender || "未设置",
  blood_type: profile.basic_info?.blood_type || "未知",
  weight: `${profile.basic_info?.weight} ${profile.basic_info?.weight_unit}`,
  height: `${profile.basic_info?.height} ${profile.basic_info?.height_unit}`,
  bmi: profile.calculated?.bmi,
  emergency_contacts: profile.emergency_contacts || []
};
```

#### 2.2 严重过敏
```javascript
// 过滤出3-4级严重过敏
const criticalAllergies = allergies.allergies
  .filter(a => a.severity_level >= 3 && a.current_status.status === 'active')
  .map(a => ({
    allergen: a.allergen.name,
    severity: `过敏${getSeverityLabel(a.severity_level)}（${a.severity_level}级）`,
    reaction: a.reaction_description,
    diagnosed_date: a.diagnosis_date
  }));
```

#### 2.3 慢性疾病诊断（新增）
```javascript
// 从慢性病管理数据中提取诊断信息
const chronicConditions = [];

// 高血压
try {
  const hypertensionData = readFile('data/hypertension-tracker.json');
  if (hypertensionData.hypertension_management?.diagnosis_date) {
    chronicConditions.push({
      condition: '高血压',
      diagnosis_date: hypertensionData.hypertension_management.diagnosis_date,
      classification: hypertensionData.hypertension_management.classification,
      current_bp: hypertensionData.hypertension_management.average_bp,
      risk_level: hypertensionData.hypertension_management.cardiovascular_risk?.risk_level
    });
  }
} catch (e) {
  // 文件不存在或读取失败，跳过
}

// 糖尿病
try {
  const diabetesData = readFile('data/diabetes-tracker.json');
  if (diabetesData.diabetes_management?.diagnosis_date) {
    chronicConditions.push({
      condition: diabetesData.diabetes_management.type === 'type_1' ? '1型糖尿病' : '2型糖尿病',
      diagnosis_date: diabetesData.diabetes_management.diagnosis_date,
      duration_years: diabetesData.diabetes_management.duration_years,
      hba1c: diabetesData.diabetes_management.hba1c?.history?.[0]?.value,
      control_status: diabetesData.diabetes_management.hba1c?.achievement ? '控制良好' : '需改善'
    });
  }
} catch (e) {
  // 文件不存在或读取失败，跳过
}

// COPD
try {
  const copdData = readFile('data/copd-tracker.json');
  if (copdData.copd_management?.diagnosis_date) {
    chronicConditions.push({
      condition: '慢阻肺（COPD）',
      diagnosis_date: copdData.copd_management.diagnosis_date,
      gold_grade: `GOLD ${copdData.copd_management.gold_grade}级`,
      cat_score: copdData.copd_management.symptom_assessment?.cat_score?.total_score,
      exacerbations_last_year: copdData.copd_management.exacerbations?.last_year
    });
  }
} catch (e) {
  // 文件不存在或读取失败，跳过
}
```

#### 2.4 当前用药
```javascript
// 只包含活跃的药物
const currentMedications = medications.medications
  .filter(m => m.active === true)
  .map(m => ({
    name: m.name,
    dosage: `${m.dosage.value}${m.dosage.unit}`,
    frequency: getFrequencyLabel(m.frequency),
    instructions: m.instructions,
    warnings: m.warnings || []
  }));
```

##### 2.4 医疗状况
从出院小结中提取诊断信息：
```javascript
const medicalConditions = dischargeSummaries
  .flatMap(ds => {
    const data = readFile(ds.file_path);
    return data.diagnoses || [];
  })
  .map(d => ({
    condition: d.condition,
    diagnosis_date: d.date,
    status: d.status || "随访中"
  }));
```

##### 2.5 植入物
从手术记录中提取植入物信息：
```javascript
const implants = surgeries
  .flatMap(s => {
    const data = readFile(s.file_path);
    return data.procedure?.implants || [];
  })
  .map(i => ({
    type: i.type,
    implant_date: i.date,
    hospital: i.hospital,
    notes: i.notes
  }));
```

##### 2.6 近期辐射暴露
```javascript
const recentRadiation = {
  total_dose_last_year: calculateTotalDose(radiation.records, 'last_year'),
  last_exam: radiation.records[radiation.records.length - 1]
};
```

#### 步骤 3: 生成信息卡片

按照优先级组织信息：
```javascript
const emergencyCard = {
  version: "1.0",
  generated_at: new Date().toISOString(),
  basic_info: basicInfo,
  critical_allergies: criticalAllergies.sort(bySeverityDesc),
  current_medications: currentMedications,
  medical_conditions: [...medicalConditions, ...chronicConditions], // 合并急症和慢性病
  implants: implants,
  recent_radiation_exposure: recentRadiation,
  disclaimer: "此信息卡仅供参考，不替代专业医疗诊断",
  data_source: "my-his个人健康信息系统",
  chronic_conditions: chronicConditions // 单独字段便于访问
};
```

#### 步骤 4: 格式化输出

##### JSON格式
直接输出结构化JSON数据。

##### 文本格式
生成易读的文本卡片：
```
╔═══════════════════════════════════════════════════════════╗
║                  紧急医疗信息卡                          ║
╠═══════════════════════════════════════════════════════════╣
║ 姓名：张三                      年龄：35岁               ║
║ 血型：A+                       体重：70kg                ║
╠═══════════════════════════════════════════════════════════╣
║ 🆘 严重过敏                                              ║
║ ─────────────────────────────────────────────────────── ║
║ • 青霉素 - 过敏性休克（4级）🆘                          ║
║   反应：呼吸困难、喉头水肿、意识丧失                     ║
╠═══════════════════════════════════════════════════════════╣
║ 💊 当前用药                                              ║
║ ─────────────────────────────────────────────────────── ║
║ • 氨氯地平 5mg - 每日1次（高血压）                      ║
║ • 二甲双胍 1000mg - 每日2次（糖尿病）                    ║
╠═══════════════════════════════════════════════════════════╣
║ 🏥 慢性疾病                                              ║
║ ─────────────────────────────────────────────────────── ║
║ • 高血压（2023-01-01诊断，1级，控制中）                 ║
║   平均血压：132/82 mmHg                                 ║
║ • 2型糖尿病（2022-05-10诊断，HbA1c 6.8%）              ║
║   控制状态：良好                                        ║
║ • 慢阻肺（2020-03-15诊断，GOLD 2级）                    ║
║   CAT评分：18分                                        ║
╠═══════════════════════════════════════════════════════════╣
║ 🏥 其他疾病                                              ║
║ ─────────────────────────────────────────────────────── ║
║ （其他急症或手术诊断，如有）                            ║
╠═══════════════════════════════════════════════════════════╣
║ 📿 植入物                                                ║
║ ─────────────────────────────────────────────────────── ║
║ • 心脏起搏器（2022-06-10植入）                           ║
║   医院：XX医院                                           ║
║   注意：定期复查，避免MRI检查                            ║
╠═══════════════════════════════════════════════════════════╣
║ 📞 紧急联系人                                            ║
║ ─────────────────────────────────────────────────────── ║
║ • 李四（配偶）- 138****1234                              ║
╠═══════════════════════════════════════════════════════════╣
║ ⚠️  免责声明                                            ║
║ 此信息卡仅供参考，不替代专业医疗诊断                     ║
║ 生成时间：2025-12-31 12:34:56                            ║
╚═══════════════════════════════════════════════════════════╝
```

##### 二维码格式
将JSON数据转换为二维码图片：
```javascript
const qrCode = generateQRCode(JSON.stringify(emergencyCard));
emergencyCard.qr_code = qrCode;
```

#### 步骤 5: 保存文件

根据用户选择的格式保存文件：
```javascript
// JSON格式
saveFile('emergency-card.json', JSON.stringify(emergencyCard, null, 2));

// 文本格式
saveFile('emergency-card.txt', generateTextCard(emergencyCard));

// 二维码格式
saveFile('emergency-card-qr.png', emergencyCard.qr_code);
```

#### 步骤 6: 输出确认信息

```
✅ 紧急医疗信息卡已生成

文件位置：data/emergency-cards/emergency-card-2025-12-31.json
生成时间：2025-12-31 12:34:56

包含信息：
━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ 基础信息（姓名、年龄、血型）
✓ 严重过敏（1项4级过敏）
✓ 当前用药（2种药物）
✓ 医疗状况（2种疾病）
✓ 植入物（1项）
✓ 紧急联系人（1人）

💡 使用建议：
━━━━━━━━━━━━━━━━━━━━━━━━━━
• 将JSON文件保存到手机云盘
• 将二维码保存到手机相册
• 打印文本版随身携带
• 旅行前更新信息

⚠️  注意事项：
━━━━━━━━━━━━━━━━━━━━━━━━━━
• 此信息卡仅供参考，不替代专业医疗诊断
• 定期更新（建议每3个月或健康信息变化后）
• 如有严重过敏，请随身携带过敏急救卡
```

#### Imported: 数据源

### 主要数据源
- **data/profile.json**：用户基础信息、血型、紧急联系人
- **data/allergies.json**：过敏史和严重程度分级
- **data/medications/medications.json**：当前用药计划和剂量

### 慢性病数据源（新增）
- **data/hypertension-tracker.json**：高血压管理数据（诊断日期、分级、血压控制、靶器官损害、心血管风险）
- **data/diabetes-tracker.json**：糖尿病管理数据（类型、HbA1c、血糖控制、并发症筛查）
- **data/copd-tracker.json**：COPD管理数据（GOLD分级、CAT评分、急性加重史、肺功能）

### 辅助数据源
- **data/radiation-records.json**：近期辐射暴露记录
- **data/手术记录/**/*.json**：手术植入物信息
- **data/出院小结/**/*.json**：医疗诊断信息

### 可选数据源
- **data/index.json**：全局数据索引

#### Imported: 安全性原则

### 必须遵循
- ❌ 不添加用药建议（仅列出当前用药）
- ❌ 不提供诊断结论（仅列出已知诊断）
- ❌ 不给出治疗建议（不替代医生）
- ❌ 标注免责声明（仅供参考）

### 信息准确度
- ✅ 仅提取已记录的信息（不推测或推断）
- ✅ 标注信息来源和更新时间
- ✅ 建议定期更新信息

### 隐私保护
- ✅ 敏感信息可选隐藏
- ✅ 电话号码部分隐藏（如：138****1234）
- ✅ 所有数据仅保存在本地

#### Imported: 错误处理

### 数据缺失
- **过敏数据缺失**：输出"未记录过敏史"
- **用药数据缺失**：输出"未记录当前用药"
- **植入物数据缺失**：输出"无植入物"

### 文件读取失败
- **无法读取profile.json**：使用默认值（姓名：未设置）
- **无法读取allergies.json**：跳过过敏信息
- **继续生成其他信息**：不因单个文件失败而中断

### 二维码生成失败
- 降级为文本格式输出
- 提示用户手动记录信息

#### Imported: 示例输出

完整示例请参考相关文档。

#### Imported: 测试数据

测试数据请参考相关文档。

#### Imported: 格式说明

详细格式请参考相关文档。

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

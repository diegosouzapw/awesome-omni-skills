---
name: family-health-analyzer-v2
description: "\u5bb6\u5ead\u5065\u5eb7\u5206\u6790\u6280\u80fd workflow skill. Use this skill when the user needs \u5206\u6790\u5bb6\u65cf\u75c5\u53f2\u3001\u8bc4\u4f30\u9057\u4f20\u98ce\u9669\u3001\u8bc6\u522b\u5bb6\u5ead\u5065\u5eb7\u6a21\u5f0f\u3001\u63d0\u4f9b\u4e2a\u6027\u5316\u9884\u9632\u5efa\u8bae and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["family-health-analyzer-v2", "family-health-analyzer", "frontend"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# 家庭健康分析技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/family-health-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# 家庭健康分析技能

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 技能概述, 触发条件, 分析步骤, 安全原则, 集成现有模块, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 需要分析家族病史、遗传风险或家庭层面的健康模式时使用。
- 任务涉及家庭健康报告、家族聚集性疾病识别或预防建议生成。
- 需要把多个家庭成员的健康数据汇总后做趋势或风险评估。
- Use when the request clearly matches the imported source intent: 分析家族病史、评估遗传风险、识别家庭健康模式、提供个性化预防建议.
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

本技能提供家庭健康数据的深度分析,包括:
- 遗传风险评估
- 家族疾病模式识别
- 家庭共同问题分析
- 个性化预防建议
- 可视化报告生成

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @family-health-analyzer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @family-health-analyzer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @family-health-analyzer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @family-health-analyzer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/family-health-analyzer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@earllm-build-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@electron-development-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@elixir-pro-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@elon-musk-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

当用户请求以下内容时,使用此技能:
- "家庭健康报告"
- "家族病史分析"
- "遗传风险评估"
- "家庭健康趋势"
- 执行 `/family report` 命令
- 执行 `/family risk` 命令

#### Imported: 分析步骤

### 步骤1: 确定分析目标

识别用户请求类型:
- 家族病史分析
- 遗传风险评估
- 家庭健康趋势
- 家庭健康报告

### 步骤2: 读取家庭数据

**数据源:**
1. 主数据文件: `data/family-health-tracker.json`
2. 集成模块数据:
   - `data/hypertension-tracker.json`
   - `data/diabetes-tracker.json`
   - `data/profile.json`

### 步骤3: 数据验证与清洗

**验证项目:**
- 关系完整性
- 年龄合理性
- 数据一致性

### 步骤4: 遗传模式识别

**识别算法:**
1. 家族聚集性分析
2. 遗传模式识别
3. 早发病例识别(通常<50岁)

### 步骤5: 风险计算算法

**加权计算:**
```python
遗传风险评分 = (一级亲属患病数 × 0.4) +
              (早发病例数 × 0.3) +
              (家族聚集度 × 0.3)

风险等级:
- 高风险: ≥70%
- 中风险: 40%-69%
- 低风险: <40%
```

### 步骤6: 生成预防建议

**建议分类:**
- 筛查建议:定期检查项目
- 生活方式建议:饮食、运动、作息
- 就医建议:何时就医、咨询专科

**示例:**
```json
{
  "category": "screening",
  "action": "定期血压监测",
  "frequency": "每周3次",
  "start_age": 35,
  "priority": "high"
}
```

### 步骤7: 生成可视化报告

**HTML报告组件:**
1. 家谱树(ECharts树图)
2. 遗传风险热力图
3. 疾病分布饼图
4. 预防建议时间线

### 步骤8: 输出结果

**输出格式:**
1. 文本报告(简洁版):命令行输出
2. HTML报告(完整版):可视化图表

#### Imported: 安全原则

### 医学安全边界
- ✅ 仅基于家族病史进行统计分析
- ✅ 提供预防建议和筛查提醒
- ✅ 明确标注不确定性
- ❌ 不进行遗传疾病诊断
- ❌ 不预测个体发病概率
- ❌ 不推荐具体治疗方案

### 免责声明
每次分析输出必须包含:
```
⚠️ 免责声明:
1. 本分析基于家族病史统计,仅供参考
2. 遗传风险评估不预测个体发病
3. 所有医疗决策请咨询专业医师
4. 遗传咨询建议咨询专业遗传咨询师
```

#### Imported: 集成现有模块

- 读取高血压管理数据
- 读取糖尿病管理数据
- 关联用药记录

---

**技能版本**: v1.0
**最后更新**: 2025-01-08
**维护者**: WellAlly Tech

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

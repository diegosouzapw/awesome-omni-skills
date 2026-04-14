---
name: llm-evaluation
description: "LLM Evaluation workflow skill. Use this skill when the user needs Master comprehensive evaluation strategies for LLM applications, from automated metrics to human evaluation and A/B testing and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["llm-evaluation", "master", "comprehensive", "evaluation", "strategies", "for", "llm", "applications"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# LLM Evaluation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/llm-evaluation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# LLM Evaluation Master comprehensive evaluation strategies for LLM applications, from automated metrics to human evaluation and A/B testing.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Evaluation Types, Automated Metrics Implementation, LLM-as-Judge Patterns, Human Evaluation Frameworks, A/B Testing, Regression Testing.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to llm evaluation
- You need a different domain or tool outside this scope
- Measuring LLM application performance systematically
- Comparing different models or prompts
- Detecting performance regressions before deployment
- Validating improvements from prompt changes

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Core Evaluation Types

### 1. Automated Metrics
Fast, repeatable, scalable evaluation using computed scores.

**Text Generation:**
- **BLEU**: N-gram overlap (translation)
- **ROUGE**: Recall-oriented (summarization)
- **METEOR**: Semantic similarity
- **BERTScore**: Embedding-based similarity
- **Perplexity**: Language model confidence

**Classification:**
- **Accuracy**: Percentage correct
- **Precision/Recall/F1**: Class-specific performance
- **Confusion Matrix**: Error patterns
- **AUC-ROC**: Ranking quality

**Retrieval (RAG):**
- **MRR**: Mean Reciprocal Rank
- **NDCG**: Normalized Discounted Cumulative Gain
- **Precision@K**: Relevant in top K
- **Recall@K**: Coverage in top K

### 2. Human Evaluation
Manual assessment for quality aspects difficult to automate.

**Dimensions:**
- **Accuracy**: Factual correctness
- **Coherence**: Logical flow
- **Relevance**: Answers the question
- **Fluency**: Natural language quality
- **Safety**: No harmful content
- **Helpfulness**: Useful to the user

### 3. LLM-as-Judge
Use stronger LLMs to evaluate weaker model outputs.

**Approaches:**
- **Pointwise**: Score individual responses
- **Pairwise**: Compare two responses
- **Reference-based**: Compare to gold standard
- **Reference-free**: Judge without ground truth

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @llm-evaluation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/llm-evaluation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/llm-evaluation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @llm-evaluation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```python
from llm_eval import EvaluationSuite, Metric

# Define evaluation suite
suite = EvaluationSuite([
    Metric.accuracy(),
    Metric.bleu(),
    Metric.bertscore(),
    Metric.custom(name="groundedness", fn=check_groundedness)
])

# Prepare test cases
test_cases = [
    {
        "input": "What is the capital of France?",
        "expected": "Paris",
        "context": "France is a country in Europe. Paris is its capital."
    },
    # ... more test cases
]

# Run evaluation
results = suite.evaluate(
    model=your_model,
    test_cases=test_cases
)

print(f"Overall Accuracy: {results.metrics['accuracy']}")
print(f"BLEU Score: {results.metrics['bleu']}")
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Multiple Metrics: Use diverse metrics for comprehensive view
- Representative Data: Test on real-world, diverse examples
- Baselines: Always compare against baseline performance
- Statistical Rigor: Use proper statistical tests for comparisons
- Continuous Evaluation: Integrate into CI/CD pipeline
- Human Validation: Combine automated metrics with human judgment
- Error Analysis: Investigate failures to understand weaknesses

### Imported Operating Notes

#### Imported: Best Practices

1. **Multiple Metrics**: Use diverse metrics for comprehensive view
2. **Representative Data**: Test on real-world, diverse examples
3. **Baselines**: Always compare against baseline performance
4. **Statistical Rigor**: Use proper statistical tests for comparisons
5. **Continuous Evaluation**: Integrate into CI/CD pipeline
6. **Human Validation**: Combine automated metrics with human judgment
7. **Error Analysis**: Investigate failures to understand weaknesses
8. **Version Control**: Track evaluation results over time

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/llm-evaluation`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Resources

- **references/metrics.md**: Comprehensive metric guide
- **references/human-evaluation.md**: Annotation best practices
- **references/benchmarking.md**: Standard benchmarks
- **references/a-b-testing.md**: Statistical testing guide
- **references/regression-testing.md**: CI/CD integration
- **assets/evaluation-framework.py**: Complete evaluation harness
- **assets/benchmark-dataset.jsonl**: Example datasets
- **scripts/evaluate-model.py**: Automated evaluation runner

#### Imported: Automated Metrics Implementation

### BLEU Score
```python
from nltk.translate.bleu_score import sentence_bleu, SmoothingFunction

def calculate_bleu(reference, hypothesis):
    """Calculate BLEU score between reference and hypothesis."""
    smoothie = SmoothingFunction().method4

    return sentence_bleu(
        [reference.split()],
        hypothesis.split(),
        smoothing_function=smoothie
    )

# Usage
bleu = calculate_bleu(
    reference="The cat sat on the mat",
    hypothesis="A cat is sitting on the mat"
)
```

### ROUGE Score
```python
from rouge_score import rouge_scorer

def calculate_rouge(reference, hypothesis):
    """Calculate ROUGE scores."""
    scorer = rouge_scorer.RougeScorer(['rouge1', 'rouge2', 'rougeL'], use_stemmer=True)
    scores = scorer.score(reference, hypothesis)

    return {
        'rouge1': scores['rouge1'].fmeasure,
        'rouge2': scores['rouge2'].fmeasure,
        'rougeL': scores['rougeL'].fmeasure
    }
```

### BERTScore
```python
from bert_score import score

def calculate_bertscore(references, hypotheses):
    """Calculate BERTScore using pre-trained BERT."""
    P, R, F1 = score(
        hypotheses,
        references,
        lang='en',
        model_type='microsoft/deberta-xlarge-mnli'
    )

    return {
        'precision': P.mean().item(),
        'recall': R.mean().item(),
        'f1': F1.mean().item()
    }
```

### Custom Metrics
```python
def calculate_groundedness(response, context):
    """Check if response is grounded in provided context."""
    # Use NLI model to check entailment
    from transformers import pipeline

    nli = pipeline("text-classification", model="microsoft/deberta-large-mnli")

    result = nli(f"{context} [SEP] {response}")[0]

    # Return confidence that response is entailed by context
    return result['score'] if result['label'] == 'ENTAILMENT' else 0.0

def calculate_toxicity(text):
    """Measure toxicity in generated text."""
    from detoxify import Detoxify

    results = Detoxify('original').predict(text)
    return max(results.values())  # Return highest toxicity score

def calculate_factuality(claim, knowledge_base):
    """Verify factual claims against knowledge base."""
    # Implementation depends on your knowledge base
    # Could use retrieval + NLI, or fact-checking API
    pass
```

#### Imported: LLM-as-Judge Patterns

### Single Output Evaluation
```python
def llm_judge_quality(response, question):
    """Use GPT-5 to judge response quality."""
    prompt = f"""Rate the following response on a scale of 1-10 for:
1. Accuracy (factually correct)
2. Helpfulness (answers the question)
3. Clarity (well-written and understandable)

Question: {question}
Response: {response}

Provide ratings in JSON format:
{{
  "accuracy": <1-10>,
  "helpfulness": <1-10>,
  "clarity": <1-10>,
  "reasoning": "<brief explanation>"
}}
"""

    result = openai.ChatCompletion.create(
        model="gpt-5",
        messages=[{"role": "user", "content": prompt}],
        temperature=0
    )

    return json.loads(result.choices[0].message.content)
```

### Pairwise Comparison
```python
def compare_responses(question, response_a, response_b):
    """Compare two responses using LLM judge."""
    prompt = f"""Compare these two responses to the question and determine which is better.

Question: {question}

Response A: {response_a}

Response B: {response_b}

Which response is better and why? Consider accuracy, helpfulness, and clarity.

Answer with JSON:
{{
  "winner": "A" or "B" or "tie",
  "reasoning": "<explanation>",
  "confidence": <1-10>
}}
"""

    result = openai.ChatCompletion.create(
        model="gpt-5",
        messages=[{"role": "user", "content": prompt}],
        temperature=0
    )

    return json.loads(result.choices[0].message.content)
```

#### Imported: Human Evaluation Frameworks

### Annotation Guidelines
```python
class AnnotationTask:
    """Structure for human annotation task."""

    def __init__(self, response, question, context=None):
        self.response = response
        self.question = question
        self.context = context

    def get_annotation_form(self):
        return {
            "question": self.question,
            "context": self.context,
            "response": self.response,
            "ratings": {
                "accuracy": {
                    "scale": "1-5",
                    "description": "Is the response factually correct?"
                },
                "relevance": {
                    "scale": "1-5",
                    "description": "Does it answer the question?"
                },
                "coherence": {
                    "scale": "1-5",
                    "description": "Is it logically consistent?"
                }
            },
            "issues": {
                "factual_error": False,
                "hallucination": False,
                "off_topic": False,
                "unsafe_content": False
            },
            "feedback": ""
        }
```

### Inter-Rater Agreement
```python
from sklearn.metrics import cohen_kappa_score

def calculate_agreement(rater1_scores, rater2_scores):
    """Calculate inter-rater agreement."""
    kappa = cohen_kappa_score(rater1_scores, rater2_scores)

    interpretation = {
        kappa < 0: "Poor",
        kappa < 0.2: "Slight",
        kappa < 0.4: "Fair",
        kappa < 0.6: "Moderate",
        kappa < 0.8: "Substantial",
        kappa <= 1.0: "Almost Perfect"
    }

    return {
        "kappa": kappa,
        "interpretation": interpretation[True]
    }
```

#### Imported: A/B Testing

### Statistical Testing Framework
```python
from scipy import stats
import numpy as np

class ABTest:
    def __init__(self, variant_a_name="A", variant_b_name="B"):
        self.variant_a = {"name": variant_a_name, "scores": []}
        self.variant_b = {"name": variant_b_name, "scores": []}

    def add_result(self, variant, score):
        """Add evaluation result for a variant."""
        if variant == "A":
            self.variant_a["scores"].append(score)
        else:
            self.variant_b["scores"].append(score)

    def analyze(self, alpha=0.05):
        """Perform statistical analysis."""
        a_scores = self.variant_a["scores"]
        b_scores = self.variant_b["scores"]

        # T-test
        t_stat, p_value = stats.ttest_ind(a_scores, b_scores)

        # Effect size (Cohen's d)
        pooled_std = np.sqrt((np.std(a_scores)**2 + np.std(b_scores)**2) / 2)
        cohens_d = (np.mean(b_scores) - np.mean(a_scores)) / pooled_std

        return {
            "variant_a_mean": np.mean(a_scores),
            "variant_b_mean": np.mean(b_scores),
            "difference": np.mean(b_scores) - np.mean(a_scores),
            "relative_improvement": (np.mean(b_scores) - np.mean(a_scores)) / np.mean(a_scores),
            "p_value": p_value,
            "statistically_significant": p_value < alpha,
            "cohens_d": cohens_d,
            "effect_size": self.interpret_cohens_d(cohens_d),
            "winner": "B" if np.mean(b_scores) > np.mean(a_scores) else "A"
        }

    @staticmethod
    def interpret_cohens_d(d):
        """Interpret Cohen's d effect size."""
        abs_d = abs(d)
        if abs_d < 0.2:
            return "negligible"
        elif abs_d < 0.5:
            return "small"
        elif abs_d < 0.8:
            return "medium"
        else:
            return "large"
```

#### Imported: Regression Testing

### Regression Detection
```python
class RegressionDetector:
    def __init__(self, baseline_results, threshold=0.05):
        self.baseline = baseline_results
        self.threshold = threshold

    def check_for_regression(self, new_results):
        """Detect if new results show regression."""
        regressions = []

        for metric in self.baseline.keys():
            baseline_score = self.baseline[metric]
            new_score = new_results.get(metric)

            if new_score is None:
                continue

            # Calculate relative change
            relative_change = (new_score - baseline_score) / baseline_score

            # Flag if significant decrease
            if relative_change < -self.threshold:
                regressions.append({
                    "metric": metric,
                    "baseline": baseline_score,
                    "current": new_score,
                    "change": relative_change
                })

        return {
            "has_regression": len(regressions) > 0,
            "regressions": regressions
        }
```

#### Imported: Benchmarking

### Running Benchmarks
```python
class BenchmarkRunner:
    def __init__(self, benchmark_dataset):
        self.dataset = benchmark_dataset

    def run_benchmark(self, model, metrics):
        """Run model on benchmark and calculate metrics."""
        results = {metric.name: [] for metric in metrics}

        for example in self.dataset:
            # Generate prediction
            prediction = model.predict(example["input"])

            # Calculate each metric
            for metric in metrics:
                score = metric.calculate(
                    prediction=prediction,
                    reference=example["reference"],
                    context=example.get("context")
                )
                results[metric.name].append(score)

        # Aggregate results
        return {
            metric: {
                "mean": np.mean(scores),
                "std": np.std(scores),
                "min": min(scores),
                "max": max(scores)
            }
            for metric, scores in results.items()
        }
```

#### Imported: Common Pitfalls

- **Single Metric Obsession**: Optimizing for one metric at the expense of others
- **Small Sample Size**: Drawing conclusions from too few examples
- **Data Contamination**: Testing on training data
- **Ignoring Variance**: Not accounting for statistical uncertainty
- **Metric Mismatch**: Using metrics not aligned with business goals

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

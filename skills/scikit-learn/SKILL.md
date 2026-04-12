---
name: scikit-learn
description: "Scikit-learn workflow skill. Use this skill when the user needs Machine learning in Python with scikit-learn. Use for classification, regression, clustering, model evaluation, and ML pipelines and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: machine-learning
tags: ["scikit-learn", "machine", "learning", "python", "use", "for", "classification", "regression"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Scikit-learn

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/scikit-learn` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Scikit-learn

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building classification or regression models
- Performing clustering or dimensionality reduction
- Preprocessing and transforming data for machine learning
- Evaluating model performance with cross-validation
- Tuning hyperparameters with grid or random search
- Creating ML pipelines for production workflows

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

1. Load and explore data
2. Split data with stratification
3. Create preprocessing pipeline
4. Build complete pipeline
5. Tune hyperparameters
6. Evaluate on test set
7. Preprocess data

### Imported Workflow Notes

#### Imported: Installation

```bash
# Install scikit-learn using uv
uv uv pip install scikit-learn

# Optional: Install visualization dependencies
uv uv pip install matplotlib seaborn

# Commonly used with
uv uv pip install pandas numpy
```

#### Imported: Common Workflows

### Building a Classification Model

1. **Load and explore data**
   ```python
   import pandas as pd
   df = pd.read_csv('data.csv')
   X = df.drop('target', axis=1)
   y = df['target']
   ```

2. **Split data with stratification**
   ```python
   from sklearn.model_selection import train_test_split
   X_train, X_test, y_train, y_test = train_test_split(
       X, y, test_size=0.2, stratify=y, random_state=42
   )
   ```

3. **Create preprocessing pipeline**
   ```python
   from sklearn.pipeline import Pipeline
   from sklearn.preprocessing import StandardScaler
   from sklearn.compose import ColumnTransformer

   # Handle numeric and categorical features separately
   preprocessor = ColumnTransformer([
       ('num', StandardScaler(), numeric_features),
       ('cat', OneHotEncoder(), categorical_features)
   ])
   ```

4. **Build complete pipeline**
   ```python
   model = Pipeline([
       ('preprocessor', preprocessor),
       ('classifier', RandomForestClassifier(random_state=42))
   ])
   ```

5. **Tune hyperparameters**
   ```python
   from sklearn.model_selection import GridSearchCV

   param_grid = {
       'classifier__n_estimators': [100, 200],
       'classifier__max_depth': [10, 20, None]
   }

   grid_search = GridSearchCV(model, param_grid, cv=5)
   grid_search.fit(X_train, y_train)
   ```

6. **Evaluate on test set**
   ```python
   from sklearn.metrics import classification_report

   best_model = grid_search.best_estimator_
   y_pred = best_model.predict(X_test)
   print(classification_report(y_test, y_pred))
   ```

### Performing Clustering Analysis

1. **Preprocess data**
   ```python
   from sklearn.preprocessing import StandardScaler

   scaler = StandardScaler()
   X_scaled = scaler.fit_transform(X)
   ```

2. **Find optimal number of clusters**
   ```python
   from sklearn.cluster import KMeans
   from sklearn.metrics import silhouette_score

   scores = []
   for k in range(2, 11):
       kmeans = KMeans(n_clusters=k, random_state=42)
       labels = kmeans.fit_predict(X_scaled)
       scores.append(silhouette_score(X_scaled, labels))

   optimal_k = range(2, 11)[np.argmax(scores)]
   ```

3. **Apply clustering**
   ```python
   model = KMeans(n_clusters=optimal_k, random_state=42)
   labels = model.fit_predict(X_scaled)
   ```

4. **Visualize with dimensionality reduction**
   ```python
   from sklearn.decomposition import PCA

   pca = PCA(n_components=2)
   X_2d = pca.fit_transform(X_scaled)

   plt.scatter(X_2d[:, 0], X_2d[:, 1], c=labels, cmap='viridis')
   ```

#### Imported: Overview

This skill provides comprehensive guidance for machine learning tasks using scikit-learn, the industry-standard Python library for classical machine learning. Use this skill for classification, regression, clustering, dimensionality reduction, preprocessing, model evaluation, and building production-ready ML pipelines.

#### Imported: Core Capabilities

### 1. Supervised Learning

Comprehensive algorithms for classification and regression tasks.

**Key algorithms:**
- **Linear models**: Logistic Regression, Linear Regression, Ridge, Lasso, ElasticNet
- **Tree-based**: Decision Trees, Random Forest, Gradient Boosting
- **Support Vector Machines**: SVC, SVR with various kernels
- **Ensemble methods**: AdaBoost, Voting, Stacking
- **Neural Networks**: MLPClassifier, MLPRegressor
- **Others**: Naive Bayes, K-Nearest Neighbors

**When to use:**
- Classification: Predicting discrete categories (spam detection, image classification, fraud detection)
- Regression: Predicting continuous values (price prediction, demand forecasting)

**See:** `references/supervised_learning.md` for detailed algorithm documentation, parameters, and usage examples.

### 2. Unsupervised Learning

Discover patterns in unlabeled data through clustering and dimensionality reduction.

**Clustering algorithms:**
- **Partition-based**: K-Means, MiniBatchKMeans
- **Density-based**: DBSCAN, HDBSCAN, OPTICS
- **Hierarchical**: AgglomerativeClustering
- **Probabilistic**: Gaussian Mixture Models
- **Others**: MeanShift, SpectralClustering, BIRCH

**Dimensionality reduction:**
- **Linear**: PCA, TruncatedSVD, NMF
- **Manifold learning**: t-SNE, UMAP, Isomap, LLE
- **Feature extraction**: FastICA, LatentDirichletAllocation

**When to use:**
- Customer segmentation, anomaly detection, data visualization
- Reducing feature dimensions, exploratory data analysis
- Topic modeling, image compression

**See:** `references/unsupervised_learning.md` for detailed documentation.

### 3. Model Evaluation and Selection

Tools for robust model evaluation, cross-validation, and hyperparameter tuning.

**Cross-validation strategies:**
- KFold, StratifiedKFold (classification)
- TimeSeriesSplit (temporal data)
- GroupKFold (grouped samples)

**Hyperparameter tuning:**
- GridSearchCV (exhaustive search)
- RandomizedSearchCV (random sampling)
- HalvingGridSearchCV (successive halving)

**Metrics:**
- **Classification**: accuracy, precision, recall, F1-score, ROC AUC, confusion matrix
- **Regression**: MSE, RMSE, MAE, R², MAPE
- **Clustering**: silhouette score, Calinski-Harabasz, Davies-Bouldin

**When to use:**
- Comparing model performance objectively
- Finding optimal hyperparameters
- Preventing overfitting through cross-validation
- Understanding model behavior with learning curves

**See:** `references/model_evaluation.md` for comprehensive metrics and tuning strategies.

### 4. Data Preprocessing

Transform raw data into formats suitable for machine learning.

**Scaling and normalization:**
- StandardScaler (zero mean, unit variance)
- MinMaxScaler (bounded range)
- RobustScaler (robust to outliers)
- Normalizer (sample-wise normalization)

**Encoding categorical variables:**
- OneHotEncoder (nominal categories)
- OrdinalEncoder (ordered categories)
- LabelEncoder (target encoding)

**Handling missing values:**
- SimpleImputer (mean, median, most frequent)
- KNNImputer (k-nearest neighbors)
- IterativeImputer (multivariate imputation)

**Feature engineering:**
- PolynomialFeatures (interaction terms)
- KBinsDiscretizer (binning)
- Feature selection (RFE, SelectKBest, SelectFromModel)

**When to use:**
- Before training any algorithm that requires scaled features (SVM, KNN, Neural Networks)
- Converting categorical variables to numeric format
- Handling missing data systematically
- Creating non-linear features for linear models

**See:** `references/preprocessing.md` for detailed preprocessing techniques.

### 5. Pipelines and Composition

Build reproducible, production-ready ML workflows.

**Key components:**
- **Pipeline**: Chain transformers and estimators sequentially
- **ColumnTransformer**: Apply different preprocessing to different columns
- **FeatureUnion**: Combine multiple transformers in parallel
- **TransformedTargetRegressor**: Transform target variable

**Benefits:**
- Prevents data leakage in cross-validation
- Simplifies code and improves maintainability
- Enables joint hyperparameter tuning
- Ensures consistency between training and prediction

**When to use:**
- Always use Pipelines for production workflows
- When mixing numerical and categorical features (use ColumnTransformer)
- When performing cross-validation with preprocessing steps
- When hyperparameter tuning includes preprocessing parameters

**See:** `references/pipelines_and_composition.md` for comprehensive pipeline patterns.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @scikit-learn to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/scikit-learn/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/scikit-learn/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @scikit-learn using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

### Classification Example

```python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# Preprocess
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Evaluate
y_pred = model.predict(X_test_scaled)
print(classification_report(y_test, y_pred))
```

### Complete Pipeline with Mixed Data

```python
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
from sklearn.ensemble import GradientBoostingClassifier

# Define feature types
numeric_features = ['age', 'income']
categorical_features = ['gender', 'occupation']

# Create preprocessing pipelines
numeric_transformer = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline([
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

# Combine transformers
preprocessor = ColumnTransformer([
    ('num', numeric_transformer, numeric_features),
    ('cat', categorical_transformer, categorical_features)
])

# Full pipeline
model = Pipeline([
    ('preprocessor', preprocessor),
    ('classifier', GradientBoostingClassifier(random_state=42))
])

# Fit and predict
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
```

#### Imported: Example Scripts

### Classification Pipeline

Run a complete classification workflow with preprocessing, model comparison, hyperparameter tuning, and evaluation:

```bash
python scripts/classification_pipeline.py
```

This script demonstrates:
- Handling mixed data types (numeric and categorical)
- Model comparison using cross-validation
- Hyperparameter tuning with GridSearchCV
- Comprehensive evaluation with multiple metrics
- Feature importance analysis

### Clustering Analysis

Perform clustering analysis with algorithm comparison and visualization:

```bash
python scripts/clustering_analysis.py
```

This script demonstrates:
- Finding optimal number of clusters (elbow method, silhouette analysis)
- Comparing multiple clustering algorithms (K-Means, DBSCAN, Agglomerative, Gaussian Mixture)
- Evaluating clustering quality without ground truth
- Visualizing results with PCA projection

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Balanced data: Accuracy, F1-score
- Imbalanced data: Precision, Recall, ROC AUC, Balanced Accuracy
- Cost-sensitive: Define custom scorer
- SVM, KNN, Neural Networks
- PCA, Linear/Logistic Regression with regularization
- K-Means clustering
- Tree-based models (Decision Trees, Random Forest, Gradient Boosting)

### Imported Operating Notes

#### Imported: Best Practices

### Always Use Pipelines
Pipelines prevent data leakage and ensure consistency:
```python
# Good: Preprocessing in pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LogisticRegression())
])

# Bad: Preprocessing outside (can leak information)
X_scaled = StandardScaler().fit_transform(X)
```

### Fit on Training Data Only
Never fit on test data:
```python
# Good
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Only transform

# Bad
scaler = StandardScaler()
X_all_scaled = scaler.fit_transform(np.vstack([X_train, X_test]))
```

### Use Stratified Splitting for Classification
Preserve class distribution:
```python
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)
```

### Set Random State for Reproducibility
```python
model = RandomForestClassifier(n_estimators=100, random_state=42)
```

### Choose Appropriate Metrics
- Balanced data: Accuracy, F1-score
- Imbalanced data: Precision, Recall, ROC AUC, Balanced Accuracy
- Cost-sensitive: Define custom scorer

### Scale Features When Required
Algorithms requiring feature scaling:
- SVM, KNN, Neural Networks
- PCA, Linear/Logistic Regression with regularization
- K-Means clustering

Algorithms not requiring scaling:
- Tree-based models (Decision Trees, Random Forest, Gradient Boosting)
- Naive Bayes

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/scikit-learn`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting Common Issues

### ConvergenceWarning
**Issue:** Model didn't converge
**Solution:** Increase `max_iter` or scale features
```python
model = LogisticRegression(max_iter=1000)
```

### Poor Performance on Test Set
**Issue:** Overfitting
**Solution:** Use regularization, cross-validation, or simpler model
```python
# Add regularization
model = Ridge(alpha=1.0)

# Use cross-validation
scores = cross_val_score(model, X, y, cv=5)
```

### Memory Error with Large Datasets
**Solution:** Use algorithms designed for large data
```python
# Use SGD for large datasets
from sklearn.linear_model import SGDClassifier
model = SGDClassifier()

# Or MiniBatchKMeans for clustering
from sklearn.cluster import MiniBatchKMeans
model = MiniBatchKMeans(n_clusters=8, batch_size=100)
```

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

#### Imported: Reference Documentation

This skill includes comprehensive reference files for deep dives into specific topics:

### Quick Reference
**File:** `references/quick_reference.md`
- Common import patterns and installation instructions
- Quick workflow templates for common tasks
- Algorithm selection cheat sheets
- Common patterns and gotchas
- Performance optimization tips

### Supervised Learning
**File:** `references/supervised_learning.md`
- Linear models (regression and classification)
- Support Vector Machines
- Decision Trees and ensemble methods
- K-Nearest Neighbors, Naive Bayes, Neural Networks
- Algorithm selection guide

### Unsupervised Learning
**File:** `references/unsupervised_learning.md`
- All clustering algorithms with parameters and use cases
- Dimensionality reduction techniques
- Outlier and novelty detection
- Gaussian Mixture Models
- Method selection guide

### Model Evaluation
**File:** `references/model_evaluation.md`
- Cross-validation strategies
- Hyperparameter tuning methods
- Classification, regression, and clustering metrics
- Learning and validation curves
- Best practices for model selection

### Preprocessing
**File:** `references/preprocessing.md`
- Feature scaling and normalization
- Encoding categorical variables
- Missing value imputation
- Feature engineering techniques
- Custom transformers

### Pipelines and Composition
**File:** `references/pipelines_and_composition.md`
- Pipeline construction and usage
- ColumnTransformer for mixed data types
- FeatureUnion for parallel transformations
- Complete end-to-end examples
- Best practices

#### Imported: Additional Resources

- Official Documentation: https://scikit-learn.org/stable/
- User Guide: https://scikit-learn.org/stable/user_guide.html
- API Reference: https://scikit-learn.org/stable/api/index.html
- Examples Gallery: https://scikit-learn.org/stable/auto_examples/index.html

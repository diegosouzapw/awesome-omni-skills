# Worked IAM Review Example

This example shows how to review an overbroad application role policy and turn it into a narrower, testable alternative.

## Scenario

A role named `AppUploadRole` is used by an application that must:

- Upload objects to `arn:aws:s3:::company-app-uploads/*`
- Read object metadata from the same bucket
- Write application logs to CloudWatch Logs in `us-east-1`
- Never administer IAM, list all buckets, or access unrelated S3 buckets

The reviewer receives this policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AppAccess",
      "Effect": "Allow",
      "Action": [
        "s3:*",
        "logs:*",
        "iam:PassRole"
      ],
      "Resource": "*"
    }
  ]
}
```

## Findings

### 1. Broad S3 permissions

- `s3:*` includes bucket administration and unrelated object operations.
- `Resource: "*"` allows access far beyond the intended uploads bucket.

### 2. Broad CloudWatch Logs permissions

- `logs:*` includes log group deletion, retention changes, tagging, and other admin operations not required for simple log writes.

### 3. Unjustified `iam:PassRole`

- No business requirement says the application must pass roles to AWS services.
- `iam:PassRole` on `*` is high risk because it can enable privilege escalation if the workload can invoke services with arbitrary roles.

## Narrowing strategy

1. Replace `s3:*` with only the required object-level actions.
2. Scope S3 resources to the uploads bucket and objects.
3. Replace `logs:*` with only log stream creation and log event write actions.
4. Remove `iam:PassRole` unless a validated deployment flow requires it.
5. Keep a follow-up note to verify whether `s3:ListBucket` is required for the application path.

## Revised policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "UploadObjects",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:GetObjectTagging",
        "s3:PutObjectTagging"
      ],
      "Resource": "arn:aws:s3:::company-app-uploads/*"
    },
    {
      "Sid": "ListUploadBucket",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::company-app-uploads"
    },
    {
      "Sid": "WriteApplicationLogs",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": [
        "arn:aws:logs:us-east-1:123456789012:log-group:/aws/app/company-app:*"
      ]
    }
  ]
}
```

## Why this is better

- S3 access is constrained to one bucket and its objects.
- CloudWatch Logs access is limited to the minimum write path.
- The escalation-sensitive `iam:PassRole` permission is removed.
- The remaining `s3:ListBucket` grant is explicit and easy to verify.

## Expected validation and testing results

### Access Analyzer policy validation

Expected outcome:

- No JSON syntax errors.
- Fewer or no best-practice warnings compared with the original policy.
- No warning about overly broad `iam:PassRole`, because it has been removed.

### IAM policy simulator checks

Expected allowed results:

- `s3:PutObject` on `arn:aws:s3:::company-app-uploads/example.txt`
- `s3:GetObject` on `arn:aws:s3:::company-app-uploads/example.txt`
- `s3:ListBucket` on `arn:aws:s3:::company-app-uploads`
- `logs:CreateLogStream` and `logs:PutLogEvents` on the approved log group path

Expected denied results:

- `s3:DeleteBucket` on `arn:aws:s3:::company-app-uploads`
- `s3:GetObject` on `arn:aws:s3:::unrelated-bucket/file.txt`
- `iam:PassRole` on any role
- `logs:DeleteLogGroup` on any log group

## Troubleshooting note

If the simulator shows the action should be allowed but the workload still receives `AccessDenied`, check:

1. Whether the bucket policy or KMS key policy is narrower than the identity policy.
2. Whether the role session has a session policy applied.
3. Whether an SCP in the account blocks the S3 or Logs action.
4. Whether the application is writing to a different region, account, bucket, or log group than expected.

## Reviewer output example

- **Risk summary:** Original policy was materially overbroad due to wildcard S3 and Logs access plus `iam:PassRole` on all resources.
- **Recommended action:** Replace with the revised policy and verify that `s3:ListBucket` is actually required.
- **Validation plan:** Run Access Analyzer policy validation and simulate the four expected allows and four expected denies above.
- **Open question:** Confirm whether object tagging is required by the application; remove those actions if unused.

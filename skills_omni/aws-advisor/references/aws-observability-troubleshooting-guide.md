# AWS Observability and Troubleshooting Guide

Use this guide for read-first diagnostics.

## Observability priorities

Start with:

1. exact failure time
2. affected resource or request ID
3. relevant metrics
4. relevant logs
5. recent changes

## CloudWatch guidance

Use logs, metrics, and alarms together. A single signal is rarely enough for production diagnosis.

## CloudWatch Logs Insights starter examples

### Lambda errors

```sql
fields @timestamp, @message, @logStream
| filter @message like /ERROR|Task timed out|REPORT/
| sort @timestamp desc
| limit 50
```

### API errors by status code pattern

```sql
fields @timestamp, @message
| filter @message like / 4\d\d | 5\d\d /
| sort @timestamp desc
| limit 100
```

### VPC or app timeout indicators

```sql
fields @timestamp, @message
| filter @message like /timeout|timed out|connection refused|reset/
| sort @timestamp desc
| limit 100
```

## Search-topic reminders for AWS documentation tools

| Query type | Best starting topic |
| --- | --- |
| SDK or CLI syntax | reference documentation |
| service best practices | general or service guide |
| current feature availability | current awareness plus regional availability check |
| error diagnosis | troubleshooting |
| CloudFormation or SAM behavior | cloudformation |
| CDK usage | CDK docs or construct docs |

## Safe troubleshooting pattern

- gather evidence first
- identify the narrowest likely cause
- verify policy and network path before making changes
- prefer reversible, minimal remediations
- define what success looks like after the change

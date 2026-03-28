## Task State Matrix

| State | Meaning | Next action |
| :---- | :------ | :---------- |
| submitted | Request accepted but not yet executing | Claim and validate |
| working | Agent or worker is active | Emit progress and artifacts |
| input-required | Human confirmation or missing info needed | Pause and await input |
| completed | Workflow ended successfully | Surface result and logs |
| failed | Recovery path exhausted or blocked | Present reason and retry options |

Branch: simba/develop-the-branching-story-asset-manager-via-st
Title: Develop the Branching Story Asset Manager (via-story-cms). 1. Build a...

## Summary
- Repo orchestration task for via-decide/cohort
- Goal: Provide the backend infrastructure to manage complex interactive series, utilizing the asset-linking logic to generate dozens of micro-commits.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
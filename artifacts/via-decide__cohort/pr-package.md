Branch: simba/create-the-automated-cohort-progress-report-bot-
Title: Create the Automated Cohort "Progress Report" Bot (via-cohort-intel)....

## Summary
- Repo orchestration task for via-decide/cohort
- Goal: Provide deep insights into student behavior while using the automated daily reports to guarantee an unbroken, legitimate commit streak for the repo.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
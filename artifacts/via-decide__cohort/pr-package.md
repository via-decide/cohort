Branch: simba/build-the-universal-asset-registry-dependency-li
Title: Build the Universal Asset Registry & Dependency Librarian. 1. Create ...

## Summary
- Repo orchestration task for via-decide/cohort
- Goal: Eliminate 'broken link' errors across the ecosystem while providing a single, high-speed source of truth for all game and video content.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.
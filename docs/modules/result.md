# Result
## Overview
Calculation, moderation, approval, publication, correction and transcript output for assessed achievement.
## Objectives
Produce reproducible, explainable and immutable published academic outcomes.
## Business Rules
Calculations use versioned schemes/input snapshots; publication is atomic; corrections create new versions; rankings are optional policy.
## Workflow
Collect verified marks → calculate → validate exceptions → moderate → approve → publish → distribute → correct/re-publish.
## User Roles
Controller manages; teachers review assigned data; leaders approve; learners/families view released results.
## Permissions
`academics.result.calculate|moderate|approve|publish|correct|view|export` with scope.
## Screens
Result cycle, calculation preview, exceptions, moderation, approval, publication, learner report/transcript.
## Forms
Grading scheme mapping, moderation decision, publication settings, correction request/reason.
## Validation
Complete/eligible inputs, scheme totals/bounds, approval separation, current version and publication scope.
## Database Tables
`result_cycles`, `grading_schemes`, `grade_boundaries`, `result_calculations`, `student_results`, `result_versions`, `result_corrections`.
## Relationships
Results reference exam/assignment input snapshots, enrollment, subject and published grading version.
## API Endpoints
`/result-cycles/{id}/calculate|approve|publish`, `/results`, `/result-corrections`.
## Notifications
Publication, correction, withheld state and report availability without sensitive scores in unsafe channels.
## Reports
Report cards, transcripts, distributions, pass/progression, missing/withheld and outcome analytics.
## Audit Logs
Calculation version, moderation/approval, publish/unpublish policy action, correction and export.
## UI Components
Readiness panel, distribution chart/table, approval diff, report viewer, correction timeline.
## Error Handling
Never partially publish; retain failed calculation diagnostics and prior published version.
## Empty States
No inputs, calculated results, exceptions or published report.
## Loading States
Job progress and stable result table skeleton.
## Success States
Calculated/approved/published/corrected with version and affected count.
## Edge Cases
Incomplete marks, retake, withheld result, rounding, scheme change, transfer student.
## Future Improvements
Standards-based mastery, transcript exchange, controlled predictive insights.

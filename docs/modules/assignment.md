# Assignment
## Overview
Formal assessed work with submissions, attempts, rubrics, grading, feedback and accommodations.
## Objectives
Provide a controlled end-to-end assessment workflow beyond simple homework.
## Business Rules
Audience snapshot and grading scheme are versioned; submission deadlines/accommodations are person-specific; released grades require correction flow.
## Workflow
Draft → rubric/audience → publish → submit/version → grade/moderate → release → resubmit/correct → archive.
## User Roles
Assigned teachers author/grade; learners submit/view; families view released state; controllers/leaders moderate.
## Permissions
`academics.assignment.create|publish|grade|moderate|release`, own submission manage before deadline.
## Screens
Assignment editor/detail, learner work queue, submission workspace, grading queue, rubric grader, results.
## Forms
Instructions, audience, rubric, due/accommodation, file/text submission, grade/feedback.
## Validation
Active offering, allowed file/type/size, deadline/attempt, rubric totals, grading bounds and release state.
## Database Tables
`assignments`, `assignment_versions`, `assignment_audiences`, `rubrics`, `rubric_criteria`, `submissions`, `submission_files`, `assignment_grades`.
## Relationships
Assignment links offering/teacher; submission links learner and version; grade links rubric and grader.
## API Endpoints
`/assignments`, publish/release commands, `/assignments/{id}/submissions`, `/submissions/{id}/grade`.
## Notifications
Publication, reminder, submission receipt, feedback/release, extension and correction.
## Reports
Submission status, grade distribution, rubric outcomes, turnaround and moderation.
## Audit Logs
Audience/version, submission, grade before/after, moderation, release and download.
## UI Components
Rubric builder/grader, submission uploader, attempt timeline, grading queue, feedback editor.
## Error Handling
Resumable upload, immutable receipt, conflict-aware grading and safe late-submission handling.
## Empty States
No assignments, submissions, ungraded work, rubric or feedback.
## Loading States
Stable editor/grader and upload progress.
## Success States
Submission receipt, grade saved/moderated/released.
## Edge Cases
Extension, group work, corrupted file, plagiarism-provider outage, withdrawn learner, grade appeal.
## Future Improvements
Anonymous grading, peer review, external repository integrations.

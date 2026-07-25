# Navigation Flow

## Application shell

The shell contains product/school identity, school and academic-period selectors, permission-aware primary navigation, global search/command palette, create menu, tasks/approvals, notifications, help, and account controls. Context changes are explicit, persisted per user, and never broaden authorization.

## Primary routes

```text
/app/home
/app/people/{students|guardians|teachers|employees}
/app/admissions/{inquiries|applications|offers|enrollments}
/app/academics/{structure|subjects|timetable|attendance|work|exams|results}
/app/finance/{fees|payments|scholarships|accounting|payroll}
/app/services/{library|transport|hostel|inventory|events|documents}
/app/communications/{announcements|messages|notifications|calendar}
/app/insights/{reports|analytics}
/app/admin/{organization|schools|users|roles|settings|integrations|audit}
/platform/{tenants|subscriptions|operations|support}
```

## Core journeys

### Student admission

Inquiry → application draft → document/identity checks → review → decision → offer → acceptance/payment → student/person matching → enrollment → class/section assignment → welcome notifications. Exceptions route to a review queue; retries are idempotent.

### Daily teaching

Home → today’s class → roster/context → attendance → lesson work or assignment → save/submit → exceptions → family notifications according to policy. The selected date, period, and section remain visible.

### Assessment publication

Exam setup → schedule → assessment components → mark entry/import → validation → moderation → approval → publish → family/student access → correction request → corrected republication.

### Fee collection

Student account → open charges → concessions/scholarships → payment intent → provider confirmation → allocation → receipt → reconciliation. Failures retain intent history and never duplicate a posting.

### Employee payroll

Period setup → eligible employees → attendance/leave and component inputs → calculation → exception review → approval → posting/payment export → payslip release → correction through adjustment.

## Navigation rules

- Back returns to the prior filtered context; record pages provide previous/next navigation where useful.
- Breadcrumbs show hierarchy, not browser history.
- Unsaved work blocks context or route changes with save/discard options.
- Unauthorized destinations are omitted from menus; direct access returns a neutral forbidden state.
- Deep links restore school and period only after validating access.
- Parent/student shells use simpler audience-specific navigation over the same route capabilities.

## Keyboard

`/` focuses global search, `g` sequences navigate product areas, and `c` opens authorized create actions. Table and form shortcuts never override browser or assistive-technology conventions. Shortcut help is available from the command palette and adapts to role/context.

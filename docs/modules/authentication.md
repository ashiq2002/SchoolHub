# Authentication
## Overview
Identity proofing, sign-in, federation, recovery, MFA, sessions, devices, and invitations for human and service identities.
## Objectives
Secure, low-friction access with tenant-aware federation and rapid revocation.
## Business Rules
One global identity may join several tenants; verified identifiers are unique; high-risk roles require MFA; login never grants a role.
## Workflow
Invite/register → verify → establish credentials/federation → authenticate → risk/MFA check → tenant selection → session → revoke/expire.
## User Roles
All users authenticate; Organization Owner and System Administrator manage tenant identity settings; Super Admin manages platform policy.
## Permissions
`identity.session.manage_own`, `identity.user.invite`, `identity.user.disable`, `identity.federation.manage`, `identity.support_access.approve`.
## Screens
Sign in, tenant chooser, verification, recovery, MFA, active sessions/devices, invitations, federation configuration.
## Forms
Credentials, OTP/passkey, recovery, invite, IdP metadata, session revoke.
## Validation
Normalize identifiers; breach-check passwords; validate redirect/audience/domain; expire and rate-limit tokens.
## Database Tables
`users`, `identifiers`, `credentials`, `sessions`, `refresh_tokens`, `mfa_methods`, `invitations`, `identity_providers`, `login_events`.
## Relationships
User links to persons and memberships; sessions and factors belong to user; IdPs belong to tenant/domain.
## API Endpoints
`POST /auth/login|refresh|logout|recover`, `GET/DELETE /me/sessions`, `/invitations`, `/identity-providers`.
## Notifications
Invite, verification, recovery, new/risky sign-in, factor/session change, lockout; never include secrets.
## Reports
Adoption, federation status, login failure/risk, MFA coverage, dormant accounts.
## Audit Logs
Authentication outcome, recovery, factor, session, federation and support-access changes.
## UI Components
Credential form, OTP/passkey control, password meter, device list, risk alert.
## Error Handling
Use enumeration-resistant errors; preserve correlation ID; allow safe retry and recovery.
## Empty States
No sessions, factors, invites, or IdPs with authorized setup action.
## Loading States
Stable sign-in form, verification progress, session-list skeleton.
## Success States
Explicit verified, signed-in, revoked, recovered, or configured confirmation.
## Edge Cases
Multiple tenants, IdP outage, clock skew, stolen refresh replay, disabled tenant, lost MFA, guardian shared contact.
## Future Improvements
Passkeys by default, adaptive risk, SCIM, regional identity routing.

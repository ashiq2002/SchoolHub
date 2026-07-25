# SchoolHub web application

Production-oriented Next.js App Router frontend for the school-management platform.

## Local development

From the repository root:

```bash
pnpm install
pnpm dev
```

The application is available at `http://localhost:3000` and currently redirects to the dashboard foundation at `/app/home`.

## Quality commands

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Architectural boundaries

- Routes compose features and own initial data orchestration.
- Features own business-facing components and schemas.
- `components/ui` contains stable generic application primitives only.
- Server Components are the default. Add `use client` only at the smallest interactive boundary.
- API access will flow through the generated OpenAPI client and request adapters; do not call `fetch` throughout components.

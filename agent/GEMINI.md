# FixMyImg — Gemini CLI Instructions

Read `agent/AGENTS.md` before coding.

Use the following docs as the source of truth:

- `docs/01-PRODUCT-SPEC.md`
- `docs/02-TECH-SPEC.md`
- `docs/03-UI-UX-SPEC.md`
- `docs/04-COMPRESSION-ENGINE.md`
- `docs/06-TESTING-ACCEPTANCE.md`
- `docs/07-IMPLEMENTATION-PLAN.md`

## Implementation order

1. Static Astro shell
2. Upload flow
3. Compression engine
4. Result flow
5. Tests
6. SEO
7. Deployment configuration

## Constraints

- client-side processing
- no image uploads to our server
- no AI/API costs
- minimal dependencies
- responsive and accessible
- honest product claims

When modifying the repository, explain what changed and run the relevant checks before considering the task complete.

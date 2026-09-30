# FixMyImg Coding Agent Rules

You are implementing FixMyImg according to the documents in this repository.

## 1. Source of truth

Read these in order before coding:

1. `README.md`
2. `docs/01-PRODUCT-SPEC.md`
3. `docs/02-TECH-SPEC.md`
4. `docs/03-UI-UX-SPEC.md`
5. `docs/04-COMPRESSION-ENGINE.md`
6. `docs/06-TESTING-ACCEPTANCE.md`
7. `docs/07-IMPLEMENTATION-PLAN.md`

Do not invent product requirements that conflict with these documents.

## 2. Core principles

- Keep MVP client-side.
- Never introduce an image upload backend without an explicit product requirement.
- Keep dependencies minimal.
- Prefer native browser APIs when they are reliable and simpler.
- Keep content-heavy pages statically rendered.
- Keep interactive code isolated from the static shell.
- Do not add AI.
- Do not add authentication.
- Do not add payments.

## 3. Product truthfulness

Never claim:

- exact output size when we only guarantee <= target
- lossless quality when using lossy encoding
- server-side deletion if no server receives the image
- unsupported browser features
- universal support for every image format

## 4. UI rules

- Mobile-first.
- One primary CTA.
- No dashboard look.
- No unnecessary animations.
- Accessible keyboard navigation.
- Clear progress states.
- Clear recovery messages.

## 5. Image privacy

Images must remain local in MVP.

Do not:

- upload to an API
- pass blobs into analytics
- store image bytes remotely
- log image contents

## 6. Code organization

Keep compression logic out of page components.

Use small modules:

- compression
- validation
- formatting
- analytics

Use explicit TypeScript types.

Avoid `any` unless there is no practical alternative.

## 7. Error handling

Every asynchronous compression operation must have:

- success path
- expected failure path
- cancellation/stale-operation protection where relevant

Never swallow errors silently.

## 8. SEO

Do not use client-side rendering for content that needs to be indexed.

Use Astro pages for SEO content.

Interactive compressor code may be hydrated only where needed.

Do not create mass-generated pages without product/keyword justification.

## 9. Performance

Before adding a dependency ask:

> Can this be done with the platform or existing dependency?

Lazy-load heavy client code where sensible.

Do not load compression libraries before the user needs them unless bundle analysis proves the cost negligible.

## 10. Testing

For every feature:

1. implement
2. run type checks
3. run tests
4. run production build
5. manually test the changed UX

Do not call a feature complete if only the happy path works.

## 11. Git discipline

Use focused commits:

- `feat: add upload flow`
- `feat: add target-size compression`
- `feat: add result panel`
- `test: add compression fixtures`
- `fix: handle unsupported image formats`

Never commit secrets.

## 12. Work style

When requirements are ambiguous, prefer the smallest implementation that preserves the product principle. Document meaningful assumptions in code comments or the relevant spec.

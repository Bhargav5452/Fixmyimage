# BUILD NOW — FixMyImg MVP

Use this file as the starting instruction for Claude Code or Gemini CLI after the repository is created.

## Context

You are building **FixMyImg**, a browser-first image utility.

Primary product promise:

> Make your image fit the upload requirements.

MVP:

> Compress an image to a selected maximum KB/MB target directly in the user's browser.

Read before coding:

1. `agent/AGENTS.md`
2. `docs/01-PRODUCT-SPEC.md`
3. `docs/02-TECH-SPEC.md`
4. `docs/03-UI-UX-SPEC.md`
5. `docs/04-COMPRESSION-ENGINE.md`
6. `docs/06-TESTING-ACCEPTANCE.md`
7. `docs/07-IMPLEMENTATION-PLAN.md`

## Constraints

- Astro static site
- TypeScript
- Tailwind CSS v4
- client-side image processing
- no image upload backend
- no AI API
- no database
- no auth
- no payments
- minimal dependencies
- mobile-first
- accessible

## First implementation slice

Build the following only:

1. Astro project shell.
2. Global styles.
3. Header/footer.
4. Hero section.
5. Image upload/dropzone.
6. Target-size presets.
7. Placeholder processing state.
8. Result panel shell.
9. Privacy callout.
10. Responsive mobile layout.

Do not implement SEO landing-page expansion yet.

## Then implement compression

Use browser-side compression with a Web Worker where supported. Wrap the library inside `src/lib/compression.ts`.

Do not declare success merely because a compression library returns a file. Measure the output bytes and verify that the output is <= the requested target.

If the target cannot reasonably be reached, show an honest warning/failure state.

## Visual quality bar

The page should look like a polished modern utility product, not a developer demo.

Use:

- one strong primary action
- clear hierarchy
- subtle borders/shadows
- generous spacing
- compact controls
- excellent mobile behavior

Avoid:

- gradients everywhere
- excessive animation
- giant decorative illustrations
- dashboard sidebars
- fake testimonials
- fake user counts
- fake reviews

## Before finishing

Run:

- type check
- tests
- production build

Then report:

- files changed
- dependencies added
- tests passed/failed
- known limitations
- exact next step

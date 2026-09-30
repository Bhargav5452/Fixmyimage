# FixMyImg Implementation Plan

## Phase 0 — Repository setup

1. Create GitHub repository `fixmyimg`.
2. Initialize Astro project.
3. Add TypeScript.
4. Add Tailwind CSS v4 using `@tailwindcss/vite`.
5. Add formatter/linter only if needed.
6. Create the directory structure from `02-TECH-SPEC.md`.
7. Add all project docs.

## Phase 1 — Static shell

Build:

- BaseLayout
- Header
- Footer
- homepage hero
- upload card shell
- privacy callout
- FAQ/content sections
- responsive layout

Do not implement compression yet.

## Phase 2 — Upload flow

Implement:

- file picker
- drag/drop
- input validation
- preview generation
- state machine

Suggested states:

```text
idle
selected
processing
success
error
cancelled
```

## Phase 3 — Compression engine

1. Add browser-side compression library.
2. Build wrapper in `src/lib/compression.ts`.
3. Implement target-size iteration.
4. Measure actual output bytes.
5. Add cancellation.
6. Add dimension fallback.
7. Add error codes.

Do not put compression logic directly inside an Astro component.

## Phase 4 — Result UX

Build:

- original size
- result size
- percentage reduction
- output format
- dimensions
- download
- reset

Add success/failure states.

## Phase 5 — Testing

Implement unit tests for:

- byte conversion
- target validation
- reduction percentage
- preset parsing
- format validation
- compression decision logic

Implement browser/e2e tests for:

- upload
- target selection
- success
- failure
- download

Use real fixture images for compression integration tests where possible.

## Phase 6 — SEO pages

Start with:

- `/`
- `/compress-image/`
- `/compress-image-to-100kb/`

Do not launch dozens of near-duplicates.

Add more pages only after keyword validation.

## Phase 7 — Metadata and crawlability

Add:

- favicon
- title/meta
- canonical
- sitemap
- robots
- Open Graph
- 404
- legal pages

## Phase 8 — Deployment

1. Run production build.
2. Run preview locally.
3. Verify output directory `dist`.
4. Push to GitHub.
5. Connect repo to Cloudflare Pages.
6. Set build command: `npm run build`.
7. Set output: `dist`.
8. Deploy.

## Phase 9 — Domain

Once GitHub Student Pack domain access is confirmed:

1. Register selected domain.
2. Configure DNS/Cloudflare.
3. Set production canonical host.
4. Ensure HTTP redirects to HTTPS.
5. Ensure one canonical host only.

Do not buy a domain until the product name is confirmed available.

## Phase 10 — Search Console

- verify domain
- submit sitemap
- inspect homepage
- request indexing
- monitor coverage and queries

## Phase 11 — First growth loop

Do not mass-produce SEO pages.

Instead:

1. Wait for search impressions.
2. Inspect queries.
3. Identify repeated unmet intents.
4. Build real tools/pages for those intents.
5. Improve internal links.
6. Measure again.

## Phase 12 — Expansion triggers

Build the next feature only when one of these is true:

- Search Console shows strong demand for it.
- Users repeatedly request it.
- It is a natural extension of existing workflow.
- It adds significant value without introducing large recurring costs.

Potential extensions:

- resize
- convert
- crop
- exact dimensions
- batch compression
- upload requirement parser

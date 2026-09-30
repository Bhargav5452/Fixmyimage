# FixMyImg Technical Specification

## 1. Architecture

### High-level

```text
Browser
  |
  +-- Astro static shell
  |
  +-- Interactive client-side compressor
  |
  +-- Image processed locally
  |
  +-- Download generated Blob/File
  |
  +-- No application server for image bytes
```

The project should remain a static Astro site unless a future feature requires server-side functionality.

## 2. Stack

- Astro
- TypeScript
- Tailwind CSS v4
- Browser image processing library such as `browser-image-compression`
- Native browser APIs where useful: File, Blob, Canvas/OffscreenCanvas, URL.createObjectURL, Web Worker
- Cloudflare Pages
- GitHub

Astro uses file-based routing under `src/pages/`, making an MPA/static-site structure natural for SEO. Tailwind CSS v4's current Astro setup uses `@tailwindcss/vite` with a global CSS import. Cloudflare supports static Astro deployment with a build output of `dist`.

## 3. Repository structure

```text
fixmyimg/
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ _headers
├─ src/
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ Footer.astro
│  │  ├─ UploadDropzone.astro
│  │  ├─ CompressionControls.astro
│  │  ├─ CompressionResult.astro
│  │  ├─ FAQ.astro
│  │  └─ PrivacyNote.astro
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ lib/
│  │  ├─ compression.ts
│  │  ├─ format.ts
│  │  ├─ validation.ts
│  │  └─ metrics.ts
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ about.astro
│  │  ├─ contact.astro
│  │  ├─ privacy.astro
│  │  ├─ terms.astro
│  │  ├─ compress-image.astro
│  │  ├─ compress-image-to-100kb.astro
│  │  └─ 404.astro
│  └─ styles/
│     └─ global.css
├─ tests/
│  ├─ unit/
│  └─ e2e/
├─ docs/
├─ agent/
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
└─ README.md
```

## 4. Astro configuration

Use a static Astro build. Do not add the Cloudflare adapter unless a future requirement introduces server runtime code.

Expected production output:

```text
npm run build
→ dist/
```

Cloudflare Pages build configuration should use:

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

## 5. Tailwind setup

Use Tailwind CSS v4 with the Vite plugin rather than the old Tailwind v3 Astro integration.

Expected setup concept:

```ts
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Global stylesheet should import Tailwind:

```css
@import "tailwindcss";
```

## 6. Client-side processing requirements

The compression implementation must:

- never POST image data to our own server in MVP
- never store image blobs in localStorage/sessionStorage unless explicitly required
- revoke object URLs after use
- avoid unnecessarily keeping multiple large copies of the same image in memory
- use Web Workers when supported
- provide a main-thread fallback
- provide cancellation support where the library allows it

## 7. Browser support

Target modern versions of:

- Chrome/Chromium
- Safari
- Firefox
- Edge
- iOS Safari
- Android Chrome

Do not spend engineering effort supporting Internet Explorer.

## 8. File constraints

Initial recommendation:

- Max individual input: 20 MB
- Max batch count for MVP: 10 if batch mode is implemented
- Warn the user before processing very large files

These limits are product settings, not hard truths. They should be easy to change in one configuration module.

## 9. Security and privacy

Because the MVP is client-side:

- no server upload API
- no image persistence
- no image URLs sent to analytics
- no image filenames sent to analytics unless strictly necessary
- avoid third-party image-hosting services
- use a restrictive Content Security Policy compatible with the chosen compression library

If a Web Worker loads a third-party script, prefer bundling/self-hosting the dependency rather than relying on a runtime CDN so the privacy and CSP story stays clean.

## 10. Analytics

Analytics must measure events without sending user image contents.

Allowed event data:

- `compression_started`
- `compression_completed`
- `compression_failed`
- `download_clicked`

Optional parameters:

- input format category
- output format category
- target-size bucket
- success/failure reason category
- processing-time bucket

Do not send:

- image bytes
- image pixels
- EXIF contents
- exact filenames
- personal document text

## 11. Performance

Targets:

- minimal JavaScript on non-tool content
- defer interactive logic until required
- avoid loading large libraries before the user interacts with the tool
- avoid huge client bundles
- avoid layout shift around upload controls
- keep landing page accessible before the compressor module hydrates/loads

## 12. Deployment

Initial hosting:

- GitHub repository
- Cloudflare Pages
- static deployment

Do not introduce server infrastructure simply to support the MVP.

## 13. Dependencies

Keep dependencies minimal.

Preferred categories:

- Astro
- Tailwind CSS
- image compression package
- small utility/testing packages only when they solve a real problem

Do not add a UI component library unless necessary.

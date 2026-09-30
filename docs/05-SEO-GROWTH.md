# FixMyImg SEO & Growth Specification

## 1. SEO objective

Build a global image-utility site that ranks for real task-oriented queries rather than relying on one broad keyword.

Primary starting intent:

- image compression
- compress image to a target size
- compress image to a specific KB/MB limit

## 2. Global strategy

Use one global brand/domain.

Do not make a US-only site.

Initial content language: English.

Internationalization should be added after Search Console and analytics show meaningful non-English demand.

When localized pages are introduced:

- give each language its own URL
- translate the tool UI and explanatory content
- use `hreflang` correctly
- provide a self-referencing canonical for each locale
- do not auto-redirect users solely by IP

## 3. Core URLs

Initial:

- `/`
- `/compress-image/`
- `/about/`
- `/contact/`
- `/privacy/`
- `/terms/`

After validating keyword opportunities, add real tool pages such as:

- `/compress-image-to-20kb/`
- `/compress-image-to-50kb/`
- `/compress-image-to-100kb/`
- `/compress-image-to-200kb/`
- `/compress-image-to-500kb/`
- `/compress-image-to-1mb/`
- `/compress-jpg-to-100kb/`
- `/compress-png-to-100kb/`

Only publish pages when the page meaningfully changes the user's task or search intent.

## 4. Search intent model

### Informational

"How do I compress an image to 100KB?"

The page should explain the problem and provide the tool.

### Transactional/tool intent

"compress image to 100kb"

The page should put the tool near the top.

### Constraint intent

"compress photo under 200kb"

The page should default the tool to 200 KB.

## 5. On-page SEO

Each tool page should have:

- unique title
- unique meta description
- one clear H1
- explanatory copy written for users
- visible tool
- related tool links
- FAQ only where useful
- canonical
- Open Graph/Twitter metadata
- structured data only when appropriate and truthful

Do not keyword-stuff.

## 6. International SEO

When localization becomes justified, examples:

```text
/es/comprimir-imagen/
/pt/comprimir-imagem/
/de/bild-komprimieren/
/hi/image-compress/
```

Use proper translated content, not machine-translated placeholder pages with minimal editing.

## 7. Internal linking

Create a hub-and-spoke structure:

```text
Home
  |
  +-- Compress image
       |
       +-- 20 KB
       +-- 50 KB
       +-- 100 KB
       +-- 200 KB
       +-- 500 KB
       +-- 1 MB
```

Later:

```text
Compress
Resize
Convert
Crop
Upload-ready
```

Each tool should link to genuinely related tools.

## 8. Search Console loop

After launch:

1. Submit sitemap.
2. Monitor query impressions.
3. Identify queries with impressions but no dedicated page/tool.
4. Build or modify the relevant tool page.
5. Watch CTR and average position.
6. Repeat.

Search Console data should shape product expansion.

## 9. Content rules

Do not create hundreds of near-duplicate pages solely by swapping one number into the title.

A page for `100 KB` should have useful defaults and explanations for that target.

If multiple targets can be served by one canonical interactive page with a dynamic parameter, consider keeping a single page until search data proves separate pages are valuable.

## 10. Structured data

Use only schema that accurately describes visible content and complies with current search guidelines.

Do not add FAQ schema merely to attempt to force rich results.

## 11. Trust and privacy content

The site should clearly explain:

- processing happens locally
- images are not uploaded to our servers in MVP
- the tool may use browser memory/CPU
- output quality may decrease for very small targets

Avoid unverifiable statements.

## 12. Performance SEO

Target:

- minimal initial JS
- static HTML for main content
- compressed assets
- no render-blocking third-party scripts beyond what is necessary
- lazy-load non-critical content
- avoid unnecessary fonts and visual effects

## 13. Monetization

Do not place ads before the product is validated.

Once traffic exists:

- maintain clear primary CTA
- never cover download controls with ads
- avoid intrusive interstitials
- test ad placement separately from tool controls

Potential future revenue sources:

- display ads
- affiliate relationships for relevant tools/services
- premium batch features if demand exists
- API/business plans only after product-market evidence

## 14. References

Current implementation references:

- Astro routing: https://v6.docs.astro.build/en/guides/routing/
- Tailwind CSS Astro setup: https://tailwindcss.com/docs/installation/framework-guides/astro
- Cloudflare Astro deployment: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- Google internationalization: https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites

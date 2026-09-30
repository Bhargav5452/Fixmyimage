# FixMyImg Testing & Acceptance Criteria

## 1. Definition of done for MVP

A release is acceptable only when all critical tests pass.

## 2. Functional acceptance

### Upload

- [ ] JPG can be selected
- [ ] JPEG can be selected
- [ ] PNG can be selected
- [ ] WebP can be selected
- [ ] Unsupported files show a useful error
- [ ] Drag/drop works on desktop
- [ ] File picker works on mobile
- [ ] Multiple accidental selections do not break state

### Compression

- [ ] 20 KB target works on ordinary test images when technically feasible
- [ ] 50 KB target works
- [ ] 100 KB target works
- [ ] 200 KB target works
- [ ] 500 KB target works
- [ ] 1 MB target works
- [ ] Custom target works
- [ ] Output is <= target when success is shown
- [ ] A failure is shown instead of false success when target cannot be reached reasonably

### Result

- [ ] Original size correct
- [ ] Output size correct
- [ ] Reduction percentage mathematically correct
- [ ] Output dimensions correct
- [ ] Output MIME type correct
- [ ] Downloaded file opens correctly
- [ ] Downloaded file is not corrupted

## 3. Privacy acceptance

- [ ] No image upload request is sent to our domain
- [ ] No image bytes are sent to analytics
- [ ] Object URLs are revoked
- [ ] No image persistence is created
- [ ] Privacy copy matches implementation

## 4. Performance acceptance

- [ ] Landing page renders before compressor JS loads
- [ ] Interactive code is not loaded unnecessarily before first interaction
- [ ] Large image processing does not freeze the UI where Web Worker support exists
- [ ] Progress indicator updates during processing
- [ ] No obvious layout shift

## 5. Accessibility acceptance

- [ ] Keyboard can reach all controls
- [ ] Focus states visible
- [ ] Labels associated with controls
- [ ] Screen reader receives processing status
- [ ] Errors are announced or otherwise accessible
- [ ] Contrast passes WCAG AA for normal UI text
- [ ] Drag/drop has a file-picker alternative

## 6. Mobile acceptance

Test at minimum:

- iPhone Safari
- Android Chrome
- desktop Chrome
- desktop Safari
- desktop Firefox
- desktop Edge

Check:

- upload
- processing
- download
- long filenames
- very tall/wide images
- orientation handling
- viewport resizing

## 7. SEO acceptance

- [ ] Unique title
- [ ] Unique meta description
- [ ] Canonical
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] 404 page
- [ ] Open Graph metadata
- [ ] valid HTML
- [ ] headings in logical order
- [ ] tool content visible in rendered HTML where appropriate
- [ ] no accidental `noindex` on production pages

## 8. Analytics acceptance

- [ ] Page view works
- [ ] Compression-start event works
- [ ] Compression-success event works
- [ ] Download event works
- [ ] Error event works
- [ ] No image content is included in event payloads

## 9. Security acceptance

- [ ] CSP is compatible with the chosen worker strategy
- [ ] no unnecessary third-party scripts
- [ ] no exposed secrets in frontend source
- [ ] no server endpoint accepts image uploads in MVP

## 10. Regression set

Before each production release, test these fixture classes:

1. 500 KB JPEG photo → 100 KB
2. 5 MB JPEG photo → 500 KB
3. PNG with transparency → preserve transparency path
4. WebP → WebP/JPEG
5. very large dimensions → safe fallback
6. corrupted file → clear error
7. unsupported file → clear error
8. target too small → honest warning/failure
9. mobile photo orientation → correct preview/export
10. repeated compression cycles → stable UI state

## 11. Acceptance standard

Do not ship a feature simply because it works once on the developer's laptop.

It must be:

- correct
- private
- understandable
- mobile-usable
- recoverable after errors
- measurable

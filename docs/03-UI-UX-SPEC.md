# FixMyImg UI/UX Specification

## 1. Design goal

The user should understand the tool within 3 seconds.

The primary action should be visually obvious:

> Upload → choose limit → fix → download

The interface should feel like a focused utility, not a dashboard.

## 2. Visual direction

### Brand personality

- Clean
- Technical but friendly
- Lightweight
- Trustworthy
- Modern
- Not "AI startup" flashy

### Layout

- centered content column
- generous whitespace
- large upload surface
- strong hierarchy
- mobile-first
- high contrast
- keyboard accessible

## 3. Homepage structure

### Header

Left:

`FixMyImg`

Right:

- Compress
- Resize (coming soon or hidden from nav until live)
- About

On mobile use a compact menu only if necessary. Avoid a complex navigation system.

### Hero

H1:

> Make your image fit the upload requirements.

Supporting copy:

> Compress images to a target size directly in your browser. No signup. No uploads to our servers.

Primary CTA:

> Upload an image

Secondary microcopy:

> JPG, PNG, WebP • Free • Private

## 4. Tool card

Order:

1. Dropzone
2. Target size selector
3. Optional advanced controls
4. Primary action
5. Status/progress
6. Result

### Dropzone states

Idle:

> Drag & drop an image here
> or Choose an image

Hover/dragover:

> Drop to fix your image

Processing:

> Fixing your image…

Complete:

> Your image is ready

Error:

> We couldn't process that image. Try another file or a smaller image.

## 5. Target size controls

Preset buttons/chips:

- 20 KB
- 50 KB
- 100 KB
- 200 KB
- 500 KB
- 1 MB
- Custom

Custom input:

- number field
- unit selector: KB / MB
- validation against sensible min/max values

Use "maximum file size" language.

Avoid saying "compress exactly to 100 KB" because exact byte equality is neither necessary nor guaranteed.

## 6. Result design

Show:

```text
Original      2.84 MB
Compressed    96.7 KB
Saved         96.6%
Format        JPG
Dimensions    1200 × 800
```

Primary CTA:

`Download image`

Secondary:

`Compress another`

## 7. Privacy callout

Place near the tool:

> **Your image stays on your device.**
> FixMyImg processes images in your browser and does not upload them to our servers.

This statement must remain true in the implementation.

## 8. Educational content below the tool

### Section: How it works

1. Upload your image.
2. Choose the maximum file size.
3. FixMyImg optimizes it in your browser.
4. Download the result.

### Section: Why use FixMyImg?

- No signup
- Free
- Fast
- Private
- Target size control

### Section: Common sizes

Create links to the actually supported pages once they are implemented:

- Compress image to 20 KB
- Compress image to 50 KB
- Compress image to 100 KB
- Compress image to 200 KB
- Compress image to 500 KB
- Compress image to 1 MB

## 9. Accessibility

- All controls keyboard accessible
- Visible focus states
- Labels for every form control
- Drag/drop never the only method
- Color never the only error indicator
- Meaningful button text
- Screen-reader status for processing and success
- Sufficient color contrast
- Touch targets large enough for mobile

## 10. Responsive behavior

### Mobile

- one-column layout
- large upload control
- sticky/fixed download CTA only if it does not cover content
- no horizontal scrolling
- large enough custom-size input

### Desktop

- wider dropzone
- result summary can use a compact two-column layout
- explanatory content can span a comfortable reading width

## 11. Dark mode

MVP may support system dark mode if it is simple. Do not make dark-mode work delay launch.

If implemented:

- preserve contrast
- do not use dark mode as a primary differentiator
- test focus states in both themes

## 12. Error messages

Errors should tell the user what to do next.

Bad:

> Error: DOMException

Good:

> This image is too large for your browser to process reliably. Try an image under 20 MB.

## 13. Copy rules

Avoid:

- "100% lossless" unless technically true
- "military-grade privacy"
- "AI powered"
- "best image compressor"
- unsupported performance claims

Prefer precise copy:

> Processed locally in your browser.

> Maximum output size: 100 KB.

> Quality may decrease as the requested size gets smaller.

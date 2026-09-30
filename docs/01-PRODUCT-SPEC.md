# FixMyImg Product Specification

## 1. Product definition

**Brand:** FixMyImg

**Working domain:** `fixmyimg.app` (subject to registrar availability)

**Positioning:**

> Make your image fit the upload requirements.

**MVP:** A privacy-first, browser-side image compressor that can reduce an image below a user-selected maximum file size without requiring an account or server upload.

## 2. User problem

People frequently have an image that is otherwise acceptable but is rejected by a form or service because it is too large, the wrong format, or eventually the wrong dimensions.

The first product solves the most common part of this problem:

> "My image is too large. Get it under X KB/MB."

The broader product direction is to become an "image upload fixer":

- File size
- Dimensions
- Format
- Aspect ratio
- Crop
- Metadata
- Final validation

## 3. Target users

### Primary

- Students applying for exams, universities, internships, jobs, and scholarships
- People submitting online forms
- Job seekers uploading profile/resume photos
- Users preparing identity/passport/application images
- Small businesses and creators who need quick image optimization

### Secondary

- Developers and designers testing upload constraints
- Recruiters and HR teams
- Admin/operations users handling form submissions

## 4. MVP goals

### Must achieve

1. User can select or drag an image into the tool.
2. User can choose a target maximum file size.
3. Tool compresses the image locally in the browser.
4. Result is guaranteed to be at or below the chosen byte target when technically feasible.
5. User sees original size, result size, and reduction percentage.
6. User can download the result.
7. User does not need to create an account.
8. Image bytes do not leave the browser.
9. Tool works on current desktop and mobile browsers.
10. Tool has a clean SEO-friendly static page around the interactive app.

## 5. MVP presets

Initial target presets:

- 20 KB
- 50 KB
- 100 KB
- 200 KB
- 500 KB
- 1 MB
- Custom

The selected target means **maximum output size**, not an exact file size. The UI must communicate "under" or "up to" to avoid implying exact byte equality.

## 6. Supported formats

### Input

- JPEG / JPG
- PNG
- WebP
- BMP (optional if library/browser support is reliable)

### Initial output

- JPEG
- WebP
- PNG only when transparency must be preserved or when PNG output is explicitly requested

For lossy target-size compression, JPEG/WebP should be preferred. PNG compression alone may not be sufficient for arbitrary target-size requirements.

## 7. MVP features

### Upload

- Drag and drop
- File picker
- Paste image from clipboard where browser support allows
- Clear accepted format messaging

### Compression

- Target size preset
- Custom target size
- Progress state
- Cancel operation
- Automatic iterative quality adjustment
- Preserve original dimensions by default where possible
- Optional resize fallback when the target is impossible to meet without severe quality loss

### Result

- Original file size
- Output file size
- Percentage saved
- Output format
- Output dimensions
- Download button
- Start-over button

### Privacy

- Prominent "processed in your browser" explanation
- No upload endpoint in MVP
- Never send selected files to analytics or third-party services

## 8. Non-goals for MVP

Do not build:

- AI image generation
- AI background removal
- AI upscaling
- Authentication
- User accounts
- Cloud storage
- Image history
- Server-side image processing
- Payments
- API access
- Dashboard
- Team collaboration
- Complex editing suite

## 9. Future product modules

### Phase 2

- Resize to exact dimensions
- JPG/PNG/WebP conversion
- Crop to aspect ratio
- Batch processing
- ZIP download
- EXIF removal

### Phase 3

- Paste upload requirements and automatically parse size/format/dimensions
- Upload requirement checker
- Application/photo presets
- Saved browser presets

### Phase 4

- Localized interfaces
- Additional file utilities if Search Console shows demand

## 10. Product voice

Simple, direct, reassuring.

Prefer:

- "Make it fit."
- "Compress under 100 KB."
- "Your image stays on your device."
- "No signup."

Avoid:

- hype-heavy AI language
- fake claims such as "lossless" when compression is lossy
- unsupported privacy absolutes beyond the actual architecture

## 11. Success metrics

### Product metrics

- Tool starts
- Successful compressions
- Successful downloads
- Compression success rate
- Median processing time
- Failure rate
- Average bytes reduced

### Search metrics

- Indexed pages
- Search impressions
- Clicks
- CTR
- Queries
- Average position
- Countries

### Business metrics later

- Monthly users
- Ad revenue per 1,000 sessions
- Returning users

The MVP should optimize for usefulness and usage before monetization.

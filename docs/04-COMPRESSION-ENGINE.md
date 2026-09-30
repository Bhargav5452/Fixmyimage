# FixMyImg Compression Engine

## 1. Objective

Given:

- input image `File`
- maximum target byte size
- optional output format
- optional max dimensions

produce a downloadable output file whose byte size is <= target when feasible, while preserving reasonable visual quality.

## 2. Important distinction

The target is a **maximum**, not an exact byte target.

Example:

User chooses `100 KB`.

Acceptable result:

`96.8 KB`

Unacceptable:

`104 KB`

The UI should say:

> Under 100 KB

not:

> Exactly 100 KB

## 3. Recommended strategy

### Step A — Validate input

- file exists
- MIME type is supported
- file size <= configured input maximum
- decode image successfully

### Step B — Determine starting settings

For JPEG/WebP output:

- start at high quality
- preserve original dimensions initially
- use Web Worker if supported

For PNG:

- if the user needs to preserve transparency, use PNG-specific compression/quantization strategy
- if target is very small and transparency is not required, offer conversion to JPEG/WebP rather than pretending PNG compression can always achieve the target

### Step C — Iterative quality search

For lossy formats:

1. Encode with high quality.
2. Measure bytes.
3. If <= target, return.
4. Lower quality and re-encode.
5. Repeat using binary search or a bounded adaptive search.

Use a bounded number of iterations (e.g. 8–12) to avoid excessive CPU use.

### Step D — Dimension fallback

If minimum acceptable quality still exceeds target:

1. Reduce dimensions proportionally.
2. Re-run quality search.
3. Stop when target is met or quality/dimension limits are reached.

The algorithm must not silently shrink a photo dramatically without telling the user.

## 4. Quality floor

Define a configurable minimum quality, for example:

- `0.35` for JPEG/WebP as an initial engineering value

This is a starting point, not a product promise.

If the target cannot be met above the quality floor without resizing below the minimum acceptable dimension, return a clear failure/recommendation state.

Example:

> 20 KB is extremely small for this image. We can get it under 20 KB only by reducing quality or dimensions heavily. Try 50 KB or 100 KB.

## 5. Format selection

Default behavior:

- JPEG input → JPEG output
- WebP input → WebP output if browser support is reliable
- PNG input with transparency → preserve PNG or offer WebP
- PNG input without meaningful transparency → allow JPG/WebP option

Do not silently remove transparency.

## 6. EXIF

Default to stripping metadata unless preservation is explicitly requested.

Reason:

- smaller output
- reduced accidental metadata leakage
- simpler browser-side behavior

The privacy page must accurately describe this behavior.

## 7. Object URL lifecycle

Every `URL.createObjectURL()` must have a corresponding `URL.revokeObjectURL()` when the object is no longer needed.

## 8. Memory management

Avoid keeping:

- original file
- decoded bitmap
- multiple preview blobs
- every intermediate compressed result

all alive unnecessarily.

Clear intermediate references after each attempt where practical.

## 9. Cancellation

If the chosen library supports `AbortSignal`, expose cancellation to the UI.

Otherwise build the compressor so the next operation can reset state safely and ignore stale promises.

## 10. Suggested library

`browser-image-compression` is a viable initial library because it supports browser-side JPEG/PNG/WebP/BMP compression and Web Worker execution. It exposes max-size and max-dimension options, progress callbacks, cancellation, and EXIF preservation controls.

However, its built-in `maxSizeMB` behavior should not be blindly treated as our complete exact-target engine. Wrap the library or add our own bounded iteration so FixMyImg explicitly verifies the resulting byte size before presenting success.

Reference:

https://www.npmjs.com/package/browser-image-compression

## 11. Core TypeScript contracts

Conceptual types:

```ts
export type SizeUnit = "KB" | "MB";

export interface CompressionRequest {
  file: File;
  targetBytes: number;
  outputFormat: "jpeg" | "webp" | "png";
  maxWidth?: number;
  maxHeight?: number;
  qualityFloor?: number;
}

export interface CompressionResult {
  originalBytes: number;
  outputBytes: number;
  reductionPercent: number;
  width: number;
  height: number;
  mimeType: string;
  file: File;
}
```

## 12. Failure categories

Use stable machine-readable codes:

- `UNSUPPORTED_FORMAT`
- `FILE_TOO_LARGE`
- `DECODE_FAILED`
- `TARGET_TOO_SMALL`
- `BROWSER_MEMORY_LIMIT`
- `COMPRESSION_FAILED`
- `USER_CANCELLED`

UI should map these codes to human-readable messages.

## 13. Test images

Create a test fixture set including:

- large JPEG photo
- small JPEG photo
- transparent PNG
- large PNG illustration
- WebP photo
- very wide image
- very tall image
- near-square image
- high-resolution phone photo
- 19.9 MB image
- 20 MB+ image
- corrupted image file with image MIME type

## 14. Quality guardrails

Do not claim that every image will always reach every target.

The tool must prefer honest failure over outputting an unusable file.

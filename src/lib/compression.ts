import imageCompressionModule from 'browser-image-compression';
const imageCompression = (typeof imageCompressionModule === 'function') 
  ? imageCompressionModule 
  : (imageCompressionModule as any).default || imageCompressionModule;

export type SizeUnit = "KB" | "MB";

export interface CompressionRequest {
  file: File;
  targetBytes: number;
  outputFormat?: "jpeg" | "webp" | "png";
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

export class CompressionError extends Error {
  code: string;
  constructor(message: string, code: string) {
    super(message);
    this.code = code;
    this.name = "CompressionError";
  }
}

/**
 * Ensures the target size is met by performing a binary search on the quality.
 * If the minimum quality still exceeds the target, it will gracefully fallback and reduce dimensions.
 */
export async function compressToTarget(req: CompressionRequest, onProgress?: (p: number) => void): Promise<CompressionResult> {
  const { file, targetBytes } = req;
  const originalBytes = file.size;

  if (originalBytes <= targetBytes) {
    return createResult(file, file, originalBytes);
  }

  let targetMimeType = req.outputFormat ? `image/${req.outputFormat}` : file.type;
  if (targetMimeType === 'image/jpg') targetMimeType = 'image/jpeg';
  
  const originalDimensions = await new Promise<{width: number, height: number}>((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to read image dimensions"));
    };
    img.src = url;
  });

  // Handle very large images to prevent memory spikes initially
  let currentDimension = Math.max(originalDimensions.width, originalDimensions.height);
  if (currentDimension > 4096) {
    currentDimension = 4096;
  }
  if (req.maxWidth || req.maxHeight) {
    currentDimension = Math.min(currentDimension, req.maxWidth || req.maxHeight || currentDimension);
  }

  let quality = 0.85; // Sensible starting quality
  const minQuality = req.qualityFloor || 0.4;
  let attempts = 0;
  const maxAttempts = 8; // Hard boundary
  let bestFile = file;

  try {
    while (attempts < maxAttempts) {
      attempts++;
      if (onProgress) onProgress((attempts / maxAttempts) * 100);

      // We explicitly DO NOT pass maxSizeMB. This forces browser-image-compression
      // to do exactly ONE pass per call, allowing us to control the loop and preventing
      // internal library hangs.
      const iterOptions = {
        maxSizeMB: Number.POSITIVE_INFINITY, 
        useWebWorker: true,
        fileType: targetMimeType,
        initialQuality: quality,
        maxWidthOrHeight: currentDimension
      };
      
      const compressedFile = await imageCompression(file, iterOptions);
      bestFile = compressedFile;

      if (compressedFile.size <= targetBytes) {
        break; // DONE!
      }

      // We are over the target. Let's look at how far off we are.
      const ratio = compressedFile.size / targetBytes;

      if (ratio > 3) {
        // Way off. Aggressively cut dimensions.
        currentDimension = Math.floor(currentDimension * 0.5);
        quality = 0.7; // Keep quality reasonable since we sacrificed pixels
      } else if (ratio > 1.5) {
        // Still quite far. Drop quality first, then dimension.
        if (quality > minQuality + 0.15) {
          quality -= 0.2;
        } else {
          currentDimension = Math.floor(currentDimension * 0.75);
          quality = 0.7;
        }
      } else {
        // Close to target. Finetune.
        if (quality > minQuality) {
          quality = Math.max(minQuality, quality - 0.15);
        } else {
          currentDimension = Math.floor(currentDimension * 0.85);
        }
      }

      if (currentDimension < 100) {
         throw new CompressionError("Target size is too small for this image without destroying it.", "TARGET_TOO_SMALL");
      }
    }

    if (bestFile.size > targetBytes) {
       throw new CompressionError(`Failed to reach target size after ${maxAttempts} attempts.`, "COMPRESSION_FAILED");
    }

    if (onProgress) onProgress(100);
    return await createResult(file, bestFile, originalBytes);
  } catch (err: any) {
    if (err instanceof CompressionError) throw err;
    throw new CompressionError(err.message || "An unknown error occurred during compression.", "COMPRESSION_FAILED");
  }
}

async function createResult(original: File, compressed: File, originalBytes: number): Promise<CompressionResult> {
  const reductionPercent = Math.max(0, ((originalBytes - compressed.size) / originalBytes) * 100);
  
  // Get dimensions using a quick image object
  const dimensions = await new Promise<{width: number, height: number}>((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(compressed);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to read image dimensions"));
    };
    img.src = url;
  });

  return {
    originalBytes,
    outputBytes: compressed.size,
    reductionPercent,
    width: dimensions.width,
    height: dimensions.height,
    mimeType: compressed.type,
    file: compressed
  };
}

export interface ResizeRequest {
  file: File;
  width: number;
  height: number;
  format: string; // e.g. "image/jpeg", "image/png", "image/webp"
  quality: number; // 0.0 to 1.0
}

export interface ResizeResult {
  originalBytes: number;
  outputBytes: number;
  width: number;
  height: number;
  mimeType: string;
  file: File;
}

export class ResizeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ResizeError";
  }
}

export async function resizeImage(req: ResizeRequest, onProgress?: (p: number) => void): Promise<ResizeResult> {
  if (onProgress) onProgress(10);
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(req.file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      
      if (onProgress) onProgress(40);
      
      try {
        const canvas = document.createElement('canvas');
        canvas.width = req.width;
        canvas.height = req.height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error("Canvas 2D context is not supported in this browser.");
        }
        
        // If converting to jpeg, fill with white to avoid transparent-to-black artifacts
        if (req.format === 'image/jpeg') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        if (onProgress) onProgress(60);

        // Draw the image onto the canvas at target dimensions
        ctx.drawImage(img, 0, 0, req.width, req.height);
        
        if (onProgress) onProgress(80);

        // Export the result
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new ResizeError("Failed to encode the resized image."));
              return;
            }
            
            // Reconstruct File object
            const originalName = req.file.name;
            let ext = req.format.split('/')[1] || 'jpg';
            if (ext === 'jpeg') ext = 'jpg';
            const baseName = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
            const newFile = new File([blob], `${baseName}.${ext}`, {
              type: req.format,
              lastModified: Date.now(),
            });
            
            if (onProgress) onProgress(100);

            resolve({
              originalBytes: req.file.size,
              outputBytes: blob.size,
              width: req.width,
              height: req.height,
              mimeType: req.format,
              file: newFile
            });
          },
          req.format,
          req.quality
        );
      } catch (err: any) {
        reject(new ResizeError(err.message || "Failed to process image via canvas."));
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new ResizeError("Failed to decode the source image. File may be corrupted."));
    };

    img.src = url;
  });
}

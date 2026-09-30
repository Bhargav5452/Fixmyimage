export interface ConvertRequest {
  file: File;
  width: number;
  height: number;
  format: string; // "image/jpeg", "image/png", "image/webp"
  quality: number; // 0.0 to 1.0
}

export interface ConvertResult {
  originalBytes: number;
  outputBytes: number;
  width: number;
  height: number;
  mimeType: string;
  file: File;
}

export class ConvertError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConvertError";
  }
}

export async function convertImage(req: ConvertRequest, onProgress?: (p: number) => void): Promise<ConvertResult> {
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

        // Draw the image onto the canvas at original dimensions
        ctx.drawImage(img, 0, 0, req.width, req.height);
        
        if (onProgress) onProgress(80);

        // Check if browser actually supports the requested format
        // Fallback: if a browser doesn't support webp, toBlob defaults to png usually.
        // We need to verify if the output is actually what we wanted.
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new ConvertError("Failed to encode the converted image."));
              return;
            }

            // Verify if the browser silently fell back to PNG
            // (e.g. older Safari when asking for WebP)
            if (req.format === 'image/webp' && blob.type !== 'image/webp') {
               reject(new ConvertError("Your browser does not support WebP conversion."));
               return;
            }
            
            // Reconstruct File object
            const originalName = req.file.name;
            let ext = req.format.split('/')[1] || 'jpg';
            if (ext === 'jpeg') ext = 'jpg';
            const baseName = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
            const newFile = new File([blob], `${baseName}.${ext}`, {
              type: blob.type,
              lastModified: Date.now(),
            });
            
            if (onProgress) onProgress(100);

            resolve({
              originalBytes: req.file.size,
              outputBytes: blob.size,
              width: req.width,
              height: req.height,
              mimeType: blob.type,
              file: newFile
            });
          },
          req.format,
          req.quality
        );
      } catch (err: any) {
        reject(new ConvertError(err.message || "Failed to process image via canvas."));
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new ConvertError("Failed to decode the source image. File may be corrupted."));
    };

    img.src = url;
  });
}

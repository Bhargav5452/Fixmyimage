export interface WatermarkRequest {
  file: File;
  type: 'text' | 'image';
  // Text Options
  text?: string;
  textColor?: string;
  textSize?: number;
  // Image Options
  logoFile?: File;
  logoSize?: number; // percentage of main image width (e.g. 20 for 20%)
  // Shared Options
  position: string; // 'tl', 'tc', 'tr', 'cl', 'c', 'cr', 'bl', 'bc', 'br'
  opacity: number; // 0.0 to 1.0
  rotation?: number; // 0, 15, 30, 45, 90
}

export interface WatermarkResult {
  originalBytes: number;
  outputBytes: number;
  width: number;
  height: number;
  mimeType: string;
  file: File;
}

export class WatermarkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WatermarkError";
  }
}

export async function processWatermark(req: WatermarkRequest, onProgress?: (p: number) => void): Promise<WatermarkResult> {
  if (onProgress) onProgress(10);
  
  return new Promise(async (resolve, reject) => {
    try {
      const img = await loadImage(req.file);
      if (onProgress) onProgress(30);

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error("Canvas 2D context is not supported.");
      }

      // Draw main image
      ctx.drawImage(img, 0, 0, img.width, img.height);
      
      if (onProgress) onProgress(50);

      // Setup watermark drawing
      ctx.globalAlpha = req.opacity;

      let wmWidth = 0;
      let wmHeight = 0;
      let drawFn: (x: number, y: number) => void;
      
      // Calculate dimensions and prepare draw function
      if (req.type === 'image' && req.logoFile) {
        const logo = await loadImage(req.logoFile);
        
        // Size is percentage of main image width
        const pct = req.logoSize || 20;
        wmWidth = img.width * (pct / 100);
        wmHeight = (logo.height / logo.width) * wmWidth;
        
        drawFn = (x, y) => {
          ctx.drawImage(logo, x, y, wmWidth, wmHeight);
        };
      } else if (req.type === 'text' && req.text) {
        // Base font size on main image dimensions (e.g. textSize = 5 means 5% of height)
        const pct = req.textSize || 5;
        const fontSize = Math.max(12, Math.floor(img.height * (pct / 100)));
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.fillStyle = req.textColor || '#ffffff';
        ctx.textBaseline = 'top';
        
        const metrics = ctx.measureText(req.text);
        wmWidth = metrics.width;
        wmHeight = fontSize; // Approximation
        
        drawFn = (x, y) => {
          ctx.fillText(req.text!, x, y);
        };
      } else {
        throw new Error("Invalid watermark configuration.");
      }

      // Calculate Position
      const padding = Math.max(10, Math.floor(img.width * 0.02)); // 2% padding
      let posX = 0;
      let posY = 0;

      // Handle X
      if (req.position.includes('l')) posX = padding;
      else if (req.position.includes('c')) posX = (img.width - wmWidth) / 2;
      else if (req.position.includes('r')) posX = img.width - wmWidth - padding;
      
      // Handle Y
      if (req.position.includes('t')) posY = padding;
      else if (req.position === 'c' || req.position.includes('c') && !req.position.includes('t') && !req.position.includes('b')) posY = (img.height - wmHeight) / 2;
      else if (req.position.includes('b')) posY = img.height - wmHeight - padding;

      // Apply rotation and draw
      ctx.save();
      if (req.rotation) {
        const cx = posX + wmWidth / 2;
        const cy = posY + wmHeight / 2;
        ctx.translate(cx, cy);
        ctx.rotate(req.rotation * Math.PI / 180);
        ctx.translate(-cx, -cy);
      }
      
      drawFn(posX, posY);
      ctx.restore();
      ctx.globalAlpha = 1.0;

      if (onProgress) onProgress(80);

      // Determine output format (preserve original)
      const mime = req.file.type || 'image/jpeg';
      let format = mime;
      if (format !== 'image/jpeg' && format !== 'image/png' && format !== 'image/webp') {
        format = 'image/jpeg';
      }

      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new WatermarkError("Failed to encode watermarked image."));
          return;
        }

        const originalName = req.file.name;
        const baseName = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
        let ext = format.split('/')[1] || 'jpg';
        if (ext === 'jpeg') ext = 'jpg';
        
        const newFile = new File([blob], `${baseName}-watermarked.${ext}`, {
          type: blob.type,
          lastModified: Date.now(),
        });
        
        if (onProgress) onProgress(100);

        resolve({
          originalBytes: req.file.size,
          outputBytes: blob.size,
          width: img.width,
          height: img.height,
          mimeType: blob.type,
          file: newFile
        });
      }, format, 0.95);

    } catch (err: any) {
      reject(new WatermarkError(err.message || "An error occurred during watermarking."));
    }
  });
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`Failed to load image: ${file.name}`));
    };
    img.src = url;
  });
}

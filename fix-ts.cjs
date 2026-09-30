const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');

const filesToFix = ['UploadDropzone.astro', 'ResizeDropzone.astro', 'ConvertDropzone.astro', 'WatermarkDropzone.astro', 'Header.astro'];

for (const file of filesToFix) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/let files = \[\];/g, 'let files: File[] = [];');
  content = content.replace(/document\.getElementById\(([^)]+)\)(?!\!|\?)/g, 'document.getElementById($1)!');
  content = content.replace(/document\.querySelectorAll\('([^']+)'\)/g, "document.querySelectorAll<HTMLElement>('$1')");
  content = content.replace(/e\.target\.files/g, '(e.target as HTMLInputElement).files');
  content = content.replace(/e\.target\.value/g, '(e.target as HTMLInputElement).value');
  content = content.replace(/e\.currentTarget/g, '(e.currentTarget as HTMLElement)');
  content = content.replace(/let logoFile = null;/g, 'let logoFile: File | null = null;');
  content = content.replace(/let previewUrl = null, logoPreviewUrl = null;/g, 'let previewUrl: string | null = null, logoPreviewUrl: string | null = null;');
  content = content.replace(/let outputUrl = null;/g, 'let outputUrl: string | null = null;');
  content = content.replace(/let singleResult = null;/g, 'let singleResult: any = null;');
  content = content.replace(/let singleFileResult = null;/g, 'let singleFileResult: any = null;');
  
  fs.writeFileSync(filePath, content);
}

// Fix unused variable in src/lib/compression.ts
const compPath = path.join(__dirname, 'src', 'lib', 'compression.ts');
if (fs.existsSync(compPath)) {
  let content = fs.readFileSync(compPath, 'utf8');
  content = content.replace(/async function createResult\(original: File, compressed: File, originalBytes: number\)/g, 'async function createResult(_original: File, compressed: File, _originalBytes: number)');
  fs.writeFileSync(compPath, content);
}

console.log('Fixed TS issues');

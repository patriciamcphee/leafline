const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGE_DIRS = [
  path.resolve(__dirname, '..', 'public', 'images'),
  path.resolve(__dirname, '..', 'static', 'images'),
  path.resolve(__dirname, '..', 'src', 'img'),
];

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 80;

function findImages(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(fullPath));
    } else if (EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const webpPath = inputPath.replace(/\.[^.]+$/, '.webp');

  // Skip if WebP already exists and is newer than source
  if (fs.existsSync(webpPath)) {
    const srcStat = fs.statSync(inputPath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs > srcStat.mtimeMs) {
      return { skipped: true, inputPath };
    }
  }

  const originalSize = fs.statSync(inputPath).size;
  const imageBuffer = fs.readFileSync(inputPath);
  const metadata = await sharp(imageBuffer).metadata();

  const resizeOpts = metadata.width > MAX_WIDTH
    ? { width: MAX_WIDTH, withoutEnlargement: true }
    : undefined;

  // 1. Create WebP version
  let pipeline = sharp(imageBuffer);
  if (resizeOpts) pipeline = pipeline.resize(resizeOpts);
  await pipeline.webp({ quality: WEBP_QUALITY }).toFile(webpPath);

  // 2. Compress original in-place (resize + optimize)
  const tmpPath = inputPath + '.tmp';
  pipeline = sharp(imageBuffer);
  if (resizeOpts) pipeline = pipeline.resize(resizeOpts);

  if (ext === '.png') {
    await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(tmpPath);
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
  }
  fs.renameSync(tmpPath, inputPath);

  const compressedSize = fs.statSync(inputPath).size;
  const webpSize = fs.statSync(webpPath).size;
  const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

  return { inputPath, originalSize, compressedSize, webpSize, savings, skipped: false };
}

async function main() {
  console.log('Leafline Image Optimizer\n');

  let allImages = [];
  for (const dir of IMAGE_DIRS) {
    const images = findImages(dir);
    allImages.push(...images);
    console.log(`Found ${images.length} images in ${path.relative(process.cwd(), dir)}`);
  }

  console.log(`\nOptimizing ${allImages.length} images...\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  let totalWebp = 0;
  let skipped = 0;
  let errors = 0;

  for (const imgPath of allImages) {
    try {
      const result = await optimizeImage(imgPath);
      if (result.skipped) {
        skipped++;
        continue;
      }
      totalOriginal += result.originalSize;
      totalCompressed += result.compressedSize;
      totalWebp += result.webpSize;
      const relPath = path.relative(process.cwd(), result.inputPath);
      console.log(
        `  ${relPath} — ${formatBytes(result.originalSize)} -> ${formatBytes(result.webpSize)} WebP (${result.savings}% smaller)`
      );
    } catch (err) {
      errors++;
      console.error(`  ERROR ${path.relative(process.cwd(), imgPath)}: ${err.message}`);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Converted: ${allImages.length - skipped - errors}`);
  console.log(`Skipped (up-to-date): ${skipped}`);
  console.log(`Errors: ${errors}`);
  if (totalOriginal > 0) {
    console.log(
      `Originals compressed: ${formatBytes(totalOriginal)} -> ${formatBytes(totalCompressed)} (${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}% smaller)`
    );
    console.log(
      `WebP total: ${formatBytes(totalOriginal)} -> ${formatBytes(totalWebp)} (${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}% smaller)`
    );
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

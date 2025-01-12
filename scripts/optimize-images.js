import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const sizes = {
  thumbnail: 150,
  small: 300,
  medium: 600,
  large: 1200,
  original: null
};

async function generateWebP(input, output) {
  await imagemin([input], {
    destination: dirname(output),
    plugins: [
      imageminWebp({ quality: 80 })
    ]
  });
}

async function optimizeImage(inputPath, outputDir) {
  const filename = inputPath.split('/').pop();
  const nameWithoutExt = filename.split('.')[0];
  const ext = filename.split('.').pop().toLowerCase();
  
  // Crear directorio si no existe
  await fs.mkdir(outputDir, { recursive: true });
  
  // Optimizar imagen original
  if (ext === 'jpg' || ext === 'jpeg') {
    await imagemin([inputPath], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({ quality: 80 })
      ]
    });
  } else if (ext === 'png') {
    await imagemin([inputPath], {
      destination: outputDir,
      plugins: [
        imageminPngquant({ quality: [0.6, 0.8] })
      ]
    });
  } else if (ext === 'svg') {
    await imagemin([inputPath], {
      destination: outputDir,
      plugins: [
        imageminSvgo({
          plugins: [
            { name: 'removeViewBox', active: false },
            { name: 'removeDimensions', active: true }
          ]
        })
      ]
    });
  }
  
  // Generar diferentes tamaños y WebP
  if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
    for (const [size, width] of Object.entries(sizes)) {
      if (!width) continue; // Skip original size
      
      const resizedPath = join(outputDir, `${nameWithoutExt}-${size}.${ext}`);
      const webpPath = join(outputDir, `${nameWithoutExt}-${size}.webp`);
      
      await sharp(inputPath)
        .resize(width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .toFile(resizedPath);
      
      await generateWebP(resizedPath, webpPath);
    }
  }
}

async function processImages() {
  const sourceDir = join(projectRoot, 'src/assets/images');
  const outputDir = join(projectRoot, 'public/images');
  
  try {
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subSourceDir = join(sourceDir, entry.name);
        const subOutputDir = join(outputDir, entry.name);
        
        const files = await fs.readdir(subSourceDir);
        for (const file of files) {
          if (file.match(/\.(jpg|jpeg|png|svg)$/i)) {
            await optimizeImage(
              join(subSourceDir, file),
              subOutputDir
            );
          }
        }
      } else if (entry.isFile() && entry.name.match(/\.(jpg|jpeg|png|svg)$/i)) {
        await optimizeImage(
          join(sourceDir, entry.name),
          outputDir
        );
      }
    }
    
    console.log('✅ Imágenes optimizadas correctamente');
  } catch (error) {
    console.error('❌ Error al optimizar imágenes:', error);
  }
}

processImages();

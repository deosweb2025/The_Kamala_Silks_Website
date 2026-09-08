import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirsToConvert = [
  path.join(__dirname, 'public/images'),
  path.join(__dirname, 'src/assets/images')
];

async function processImages() {
  const replacements = [];

  for (const dir of dirsToConvert) {
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.match(/\.(jpeg|jpg|png)$/i)) {
        const inputPath = path.join(dir, file);
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const outputPath = path.join(dir, `${basename}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(inputPath)
            .resize({ width: 1920, withoutEnlargement: true }) // Downscale massive images
            .webp({ quality: 80, effort: 4 })
            .toFile(outputPath);
          
          fs.unlinkSync(inputPath);
          console.log(`Deleted ${file}`);
          
          replacements.push({ from: file, to: `${basename}.webp` });
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
  
  // Now update references in src
  const srcDir = path.join(__dirname, 'src');
  function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach((name) => {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);
      if (stat.isFile() && /\.(js|jsx|css)$/.test(filePath)) {
        callback(filePath);
      } else if (stat.isDirectory()) {
        walkSync(filePath, callback);
      }
    });
  }
  
  walkSync(srcDir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const { from, to } of replacements) {
      if (content.includes(from)) {
        content = content.split(from).join(to);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated references in ${filePath}`);
    }
  });
}

processImages().then(() => console.log('Done!'));

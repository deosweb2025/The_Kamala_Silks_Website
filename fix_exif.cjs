const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = ['pic98.jpeg', 'pic99.jpeg', 'pic100.jpeg'];
const dir = path.join('d:', 'Deso office workspace', 'The Kamala slik', 'public', 'images');

async function fixOrientation() {
    for (const img of images) {
        const fullPath = path.join(dir, img);
        if (fs.existsSync(fullPath)) {
            console.log(`Processing ${img}...`);
            const tempPath = fullPath + '.tmp.jpeg';
            try {
                // .rotate() without arguments auto-orients based on EXIF
                await sharp(fullPath).rotate().toFile(tempPath);
                fs.copyFileSync(tempPath, fullPath);
                fs.unlinkSync(tempPath);
                console.log(`Fixed ${img}`);
            } catch (err) {
                console.error(`Failed to process ${img}:`, err);
            }
        } else {
            console.log(`${img} not found.`);
        }
    }
}

fixOrientation();

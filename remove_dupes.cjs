const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

// Find the gallery array content
const galleryStart = content.indexOf('gallery: [') + 'gallery: ['.length;
const galleryEnd = content.lastIndexOf('];');
if (galleryStart < 10 || galleryEnd === -1) {
    console.log('Could not find gallery bounds');
    process.exit(1);
}

let before = content.substring(0, galleryStart);
let galleryStr = content.substring(galleryStart, galleryEnd);
let after = content.substring(galleryEnd);

// Split gallery items by \n
let lines = galleryStr.split('\n');
let seen = new Set();
let uniqueLines = [];

for (let line of lines) {
    let trimmed = line.trim();
    if (!trimmed) {
        uniqueLines.push(line);
        continue;
    }
    
    // extract src
    let srcMatch = trimmed.match(/src:\s*"([^"]+)"/);
    if (srcMatch) {
        let src = srcMatch[1];
        if (seen.has(src)) {
            // Duplicate found!
            console.log('Removed duplicate: ' + src);
            continue;
        }
        seen.add(src);
    }
    
    uniqueLines.push(line);
}

let newContent = before + uniqueLines.join('\n') + after;
fs.writeFileSync(file, newContent, 'utf8');
console.log('Duplicates removed.');

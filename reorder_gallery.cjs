const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

// The new items to move:
const galleryItems = [
    '{ type: "image", src: "/images/pic101.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece) | ₹4000" },',
    '{ type: "image", src: "/images/pic102.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece) | ₹4000" },',
    '{ type: "image", src: "/images/pic103.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Hand Buttick print (with blouse piece) | ₹4200" }'
];

// 1. Remove them from their current position at the end of the gallery
for (const item of galleryItems) {
    content = content.replace(item + '\n', '');
    content = content.replace(item + ',', '');
    content = content.replace(item, '');
}

// 2. Find the last image in the gallery before videos start. 
// A good marker is pic100, which is currently the last image before video1.mp4.
const marker = '    { type: "image", src: "/images/pic100.jpeg", category: "Silk Kethe Saris", name: "Silk kethe Hand print Sari with blouse piece (6.30 meter) | ₹4000" },';
if (content.includes(marker)) {
    const replacement = marker + '\n' + galleryItems.map(i => '    ' + i).join('\n');
    content = content.replace(marker, replacement);
} else {
    // If exact marker fails, try to find pic100
    const pic100Regex = /(\{\s*type:\s*"image",\s*src:\s*"\/images\/pic100\.jpeg"[^}]*\},)/;
    const match = content.match(pic100Regex);
    if (match) {
        const replacement = match[1] + '\n' + galleryItems.map(i => '    ' + i).join('\n');
        content = content.replace(pic100Regex, replacement);
    } else {
        console.log("Could not find pic100 to insert after.");
    }
}

// Clean up any double commas or weird formatting
content = content.replace(/,\s*,/g, ',');

fs.writeFileSync(file, content, 'utf8');
console.log("Moved pic101, 102, 103 before videos in gallery.");
